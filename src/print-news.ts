import { ChannelReader } from './channel-reader';
import {
	buildHeader,
	buildNewsFull,
	buildNewsPreviews
} from './format-building';
import { Channel } from './interfaces/channel';

const printNewsPreviews = (channel: Channel): void => {
	buildHeader(channel);

	channel.item.forEach(item => {
		buildNewsPreviews({
			time: item['pubDate'],
			link: item['link'],
			category: item['category'],
			creator: item['dc:creator'][0],
			title: item['title']
		});
	});
};

const printNewsFull = (channel: Channel, link: string): void => {
	const newsArray = channel.item.filter(item => item['link'][0] === link);

	if (newsArray.length > 0) {
		const news = newsArray[0];

		buildNewsFull({
			category: news['category'],
			contentEncoded: news['content:encoded'],
			creator: news['dc:creator'][0],
			link: news['link'],
			time: news['pubDate'],
			title: news['title']
		});
	} else {
		console.log('Новость не найдена :(');
	}
};

export const printNews = (link?: string): void => {
	const reader = new ChannelReader('https://svtv.org/news/rss/');

	reader
		.read()
		.then(channel => {
			if (link) {
				printNewsFull(channel, link);
			} else {
				printNewsPreviews(channel);
			}
		})
		.catch(error => console.error(error));
};
