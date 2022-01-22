import { ArgumentSection } from './abstract/argument-section';
import { NewsPreview } from '../interfaces/news-preview';
import { News } from '../interfaces/news';
import { DateTime } from 'luxon';
import { convert } from 'html-to-text';
import 'colors';

export class ThreadSection extends ArgumentSection {
	protected card<T extends News>(fields: T): void {
		console.log(`${fields.category}`.blue);
		console.log(`${convert(fields.title, { wordwrap: 1000 })}`.bold);
		console.log(`${fields.time}`.cyan);
		console.log(`${convert(fields.contentEncoded)}`);
	}

	protected listItem<T extends NewsPreview>(fields: T): void {
		console.log(
			`${DateTime.fromJSDate(new Date(fields.time)).toFormat('DDD')}`
				.cyan,
			`${fields.category}`.blue,
			`Автор: ${fields.creator}`.italic
		);
		console.log(convert(fields.title, { wordwrap: 1000 }));
		console.log(`${fields.link}\n`.yellow);
	}
}
