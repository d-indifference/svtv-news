import { NewsPreview } from './interfaces/news-preview';
import 'colors';
import { convert } from 'html-to-text';
import { DateTime } from 'luxon';
import { News } from './interfaces/news';
import { Channel } from './interfaces/channel';
import { TranslationsPreview } from './interfaces/translations-preview';
import { Translation } from './interfaces/translation';

export const buildHeader = (channel: Channel) => {
	console.log('\nSVTV NEWS CONSOLE CLIENT v1.1.0\n'.bold);
	console.log(
		`══ ${DateTime.fromJSDate(new Date(channel.lastBuildDate)).toFormat(
			'DDD'
		)} ═════════════════════════════════════════════════\n`
	);
};

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

export const buildThreadPreviews = (fields: NewsPreview) => {
	console.log(
		`${DateTime.fromJSDate(new Date(fields.time)).toFormat('DDD')}`.cyan,
		`${fields.category}`.blue,
		`Автор: ${fields.creator}`.italic
	);
	console.log(convert(fields.title, { wordwrap: 1000 }));
	console.log(`${fields.link}\n`.yellow);
};

export const buildFactCheckingPreviews = (
	fields: NewsPreview,
	status: string
) => {
	console.log(
		`${DateTime.fromJSDate(new Date(fields.time)).toFormat('DDD')}`.cyan,
		`${fields.category}`.blue,
		`Автор: ${fields.creator}`.italic
	);
	console.log(`${`${status}`.bold}`.red);
	console.log(convert(fields.title, { wordwrap: 1000 }));
	console.log(`${fields.link}\n`.yellow);
};

export const buildTranslationsPreviews = (fields: TranslationsPreview) => {
	console.log(
		`${DateTime.fromJSDate(new Date(fields.time)).toFormat('DDD')}`.cyan,
		`${fields.category}`.blue,
		`Автор оригинала: ${fields.creator}`.italic
	);
	console.log(`${`${fields.description}`.magenta}`.bold);
	console.log(convert(fields.title, { wordwrap: 1000 }));
	console.log(`${fields.link}\n`.yellow);
};

export const buildTranslationFull = (fields: Translation) => {
	console.log(`${fields.category}`.blue);
	console.log(
		`${`${convert(fields.title, { wordwrap: 1000 })}`.bold}`.yellow
	);
	console.log(`${fields.time}`.cyan);
	console.log(`Автор оригинала: ${fields.creator}`.italic);
	console.log(`${`${fields.description}`.magenta}`.bold);
	console.log(`${convert(fields.contentEncoded)}`);
};
