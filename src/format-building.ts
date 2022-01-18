import { NewsPreview } from './interfaces/news-preview';
import 'colors';
import { convert } from 'html-to-text';
import { DateTime } from 'luxon';
import { News } from './interfaces/news';

export const buildNewsPreviews = (fields: NewsPreview) => {
	console.log(
		`${DateTime.fromJSDate(new Date(fields.time)).toFormat('HH:mm')}`.cyan,
		`${fields.category}`.blue,
		fields.creator
	);
	console.log(convert(fields.title, { wordwrap: 1000 }));
	console.log(`${fields.link}\n`.yellow);
};

export const buildNewsFull = (fields: News) => {
	console.log(`${fields.category}`.blue);
	console.log(`${convert(fields.title, { wordwrap: 1000 })}`.bold);
	console.log(`${fields.time}`.cyan);
	console.log(`${convert(fields.contentEncoded)}`);
};

export const buildOpinionPreviews = (fields: NewsPreview) => {
	console.log(
		`${DateTime.fromJSDate(new Date(fields.time)).toFormat('DDD')}`.cyan,
		`${fields.category}`.blue,
		fields.creator
	);
	console.log(convert(fields.title, { wordwrap: 1000 }));
	console.log(`${fields.link}\n`.yellow);
};
