import { ArgumentSection } from './abstract/argument-section';
import { News } from '../interfaces/news';
import { NewsPreview } from '../interfaces/news-preview';
import { DateTime } from 'luxon';
import { convert } from 'html-to-text';
import 'colors';

export class NewsSection extends ArgumentSection {
	protected card<T extends News>(fields: T): void {
		console.log(`${fields.category}`.blue);
		console.log(`${convert(fields.title, { wordwrap: 1000 })}`.bold);
		console.log(`${fields.time}`.cyan);
		console.log(`${convert(fields.contentEncoded)}`);
	}

	protected listItem<T extends NewsPreview>(fields: T): void {
		console.log(
			`${DateTime.fromJSDate(new Date(fields.time)).toFormat('HH:mm')}`
				.cyan,
			`${fields.category}`.blue,
			fields.creator
		);
		console.log(convert(fields.title, { wordwrap: 1000 }));
		console.log(`${fields.link}\n`.yellow);
	}
}
