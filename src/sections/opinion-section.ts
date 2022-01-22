import { Section } from './abstract/section';
import { NewsPreview } from '../interfaces/news-preview';
import { DateTime } from 'luxon';
import { convert } from 'html-to-text';
import 'colors';

export class OpinionSection extends Section {
	protected listItem<T extends NewsPreview>(fields: T): void {
		console.log(
			`${DateTime.fromJSDate(new Date(fields.time)).toFormat('DDD')}`
				.cyan,
			`${fields.category}`.blue,
			fields.creator
		);
		console.log(convert(fields.title, { wordwrap: 1000 }));
		console.log(`${fields.link}\n`.yellow);
	}
}
