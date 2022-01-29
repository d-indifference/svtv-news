import { Section } from './abstract/section';
import { NewsPreview } from '../interfaces/news-preview';
import { DateTime } from 'luxon';
import { convert } from 'html-to-text';
import { Channel } from '../interfaces/channel';
import { FactcheckingPreview } from '../interfaces/factchecking-preview';
import 'colors';

const request = require('request');
const cheerio = require('cheerio');

export class FactcheckingSection extends Section {
	protected listItem<T extends NewsPreview>(fields: T): void {
		// TODO: Подумать, как передать статус фактчекинга
		console.log(fields);
	}

	private factcheckingListItem(fields: FactcheckingPreview): void {
		console.log(
			`${DateTime.fromJSDate(new Date(fields.time)).toFormat('DDD')}`
				.cyan,
			`${fields.category}`.blue,
			`Автор: ${fields.creator}`.italic
		);
		console.log(`${`${fields.status}`.bold}`.red);
		console.log(convert(fields.title, { wordwrap: 1000 }));
		console.log(`${fields.link}\n`.yellow);
	}

	protected printListItems(channel: Channel) {
		const loading = this.twirlTimer();

		const factcheckingItems: Array<FactcheckingPreview> = [];

		channel.item.forEach(item => {
			this.factcheckingStatus(item['link'][0])
				.then(status => {
					factcheckingItems.push({
						time: item['pubDate'],
						link: item['link'],
						category: item['category'],
						creator: item['dc:creator'][0],
						title: item['title'],
						status
					});
				})
				.then(() => {
					if (factcheckingItems.length === channel.item.length) {
						factcheckingItems.sort((a, b) => {
							return (
								new Date(b.time).getTime() -
								new Date(a.time).getTime()
							);
						});

						this.printHeader(channel);

						factcheckingItems.forEach(item => {
							this.factcheckingListItem(item);
						});

						clearInterval(loading);
					}
				})
				.catch(error => {
					console.error(error);
				});
		});
	}

	private factcheckingStatus(link: string): Promise<string> {
		return new Promise((resolve, reject) => {
			request(link, (error: any, response: any, body: any) => {
				if (!error) {
					const $ = cheerio.load(body);

					resolve(
						$('.post-info-factchecking__status img')
							.attr('alt')
							.toString()
					);
				} else {
					reject(error);
				}
			});
		});
	}
}
