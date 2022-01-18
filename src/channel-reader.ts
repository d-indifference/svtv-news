import * as https from 'https';
import * as xml2js from 'xml2js';
import { Channel } from './interfaces/channel';
import { Rss } from './interfaces/rss';
const concat = require('concat-stream');

export class ChannelReader {
	private readonly link: string;

	constructor(link: string) {
		this.link = link;
	}

	public read(): Promise<Channel> {
		return new Promise((resolve, reject) => {
			const parser = new xml2js.Parser();

			https.get(this.link, res => {
				res.on('error', err => {
					reject(`Ошибка при чтении:\n${err}`);
				});

				res.pipe(
					concat((buf: { toString: () => never }) => {
						const str = buf.toString();

						parser.parseString(str, (err: never, result: Rss) => {
							resolve(result.rss.channel[0]);
						});
					})
				);
			});
		});
	}
}
