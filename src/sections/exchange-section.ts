import { Command } from 'commander';
import { TerminalCommand } from './abstract/terminal-command';
import { SVTV_URL, VERSION_NUMBER } from '../utils/consts';

const request = require('request');
const cheerio = require('cheerio');

export class ExchangeSection implements TerminalCommand {
	public init(program: Command): void {
		program
			.command('exchange')
			.description('Курс валют')
			.action(() => {
				this.commandAction();
			});
	}

	protected printHeader(): void {
		console.log(`\nSVTV NEWS CONSOLE CLIENT v${VERSION_NUMBER}\n`.bold);
		console.log(
			'═══════════════════════════════════════════════════════════\n'
		);
	}

	private currencyItems(): Promise<void> {
		return new Promise((resolve, reject) => {
			request(SVTV_URL, (error: any, response: any, body: any) => {
				if (!error) {
					const colorizeArrow = (arrow: string): string => {
						return arrow === '▲' ? arrow.green : arrow.red;
					};

					const getTextFromNode = (
						node: any,
						index: number
					): string => {
						return node[index].childNodes[0].data;
					};

					this.printHeader();

					const $ = cheerio.load(body);

					const tokens = $('.sb-currency__token');
					const values = $('.sb-currency__value');
					const arrows = $('.sb-currency__arrow');

					console.log(
						`${getTextFromNode(tokens, 0)}`.grey,
						getTextFromNode(values, 0),
						colorizeArrow(getTextFromNode(arrows, 0))
					);

					console.log(
						`${getTextFromNode(tokens, 1)}`.grey,
						getTextFromNode(values, 1),
						colorizeArrow(getTextFromNode(arrows, 1))
					);

					console.log(
						`${getTextFromNode(tokens, 2)}`.yellow,
						getTextFromNode(values, 2),
						colorizeArrow(getTextFromNode(arrows, 1))
					);

					resolve();
				} else {
					reject(error);
				}
			});
		});
	}

	protected commandAction(): void {
		this.currencyItems()
			.then()
			.catch(error => {
				console.error(error);
			});
	}
}
