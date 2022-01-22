import { ChannelReader } from './channel-reader';
import { Channel } from './interfaces/channel';
import {
	buildHeader,
	buildTranslationFull,
	buildTranslationsPreviews
} from './format-building';

const printTranslationsFull = (channel: Channel, link: string) => {
	const translationArray = channel.item.filter(
		item => item['link'][0] === link
	);

	if (translationArray.length > 0) {
		const translation = translationArray[0];

		buildTranslationFull({
			description: translation['description'][0],
			category: translation['category'],
			contentEncoded: translation['content:encoded'],
			creator: translation['dc:creator'][0],
			link: translation['link'],
			time: translation['pubDate'],
			title: translation['title']
		});
	} else {
		console.log('Тред не найден :(');
	}
};

const printTranslations = (channel: Channel): void => {
	buildHeader(channel);

	channel.item.forEach(item => {
		buildTranslationsPreviews({
			category: item['category'],
			creator: item['dc:creator'][0],
			link: item['link'],
			time: item['pubDate'],
			title: item['title'],
			description: item['description'][0]
		});
	});
};

export const printTranslation = (link?: string) => {
	const reader = new ChannelReader('https://svtv.org/translation/rss/');

	reader
		.read()
		.then(channel => {
			if (link) {
				printTranslationsFull(channel, link.trim());
			} else {
				printTranslations(channel);
			}
		})
		.catch(error => console.error(error));
};
