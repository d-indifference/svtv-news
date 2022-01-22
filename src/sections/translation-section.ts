import { ArgumentSection } from './abstract/argument-section';
import { News } from '../interfaces/news';
import { NewsPreview } from '../interfaces/news-preview';
import { Translation } from '../interfaces/translation';
import { TranslationsPreview } from '../interfaces/translations-preview';
import { DateTime } from 'luxon';
import { convert } from 'html-to-text';
import { Channel } from '../interfaces/channel';
import 'colors';

export class TranslationSection extends ArgumentSection {
	protected card<T extends News>(fields: T): void {
		console.log(fields);
	}

	protected listItem<T extends NewsPreview>(fields: T): void {
		console.log(fields);
	}

	protected printList(channel: Channel) {
		channel.item.forEach(item => {
			this.translationListItem({
				category: item['category'],
				creator: item['dc:creator'][0],
				link: item['link'],
				time: item['pubDate'],
				title: item['title'],
				description: item['description'][0]
			});
		});
	}

	protected generateCard(card: Record<string, string>) {
		this.translationCard({
			description: card['description'][0],
			category: card['category'],
			contentEncoded: card['content:encoded'],
			creator: card['dc:creator'][0],
			link: card['link'],
			time: card['pubDate'],
			title: card['title']
		});
	}

	private translationCard(fields: Translation): void {
		console.log(`${fields.category}`.blue);
		console.log(
			`${`${convert(fields.title, { wordwrap: 1000 })}`.bold}`.yellow
		);
		console.log(`${fields.time}`.cyan);
		console.log(`Автор оригинала: ${fields.creator}`.italic);
		console.log(`${`${fields.description}`.magenta}`.bold);
		console.log(`${convert(fields.contentEncoded)}`);
	}

	private translationListItem(fields: TranslationsPreview): void {
		console.log(
			`${DateTime.fromJSDate(new Date(fields.time)).toFormat('DDD')}`
				.cyan,
			`${fields.category}`.blue,
			`Автор оригинала: ${fields.creator}`.italic
		);
		console.log(`${`${fields.description}`.magenta}`.bold);
		console.log(convert(fields.title, { wordwrap: 1000 }));
		console.log(`${fields.link}\n`.yellow);
	}
}
