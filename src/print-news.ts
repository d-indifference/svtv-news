import { ChannelReader } from './channel-reader';
import { buildNewsFull, buildNewsPreviews } from './format-building';
import { DateTime } from 'luxon';
import { Channel } from './interfaces/channel';

const printNewsPreviews = (channel: Channel): void => {
	console.log('\nSVTV NEWS CONSOLE CLIENT v0.0.0\n'.bold);
	console.log(
		`══ ${DateTime.fromJSDate(new Date(channel.lastBuildDate)).toFormat(
			'DDD'
		)} ═════════════════════════════════════════════════\n`
	);

	channel.item.forEach(item => {
		buildNewsPreviews({
			time: item['pubDate'],
			link: item['link'],
			category: item['category'],
			creator: item['dc:creator'],
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
			creator: news['dc:creator'],
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
