import { ChannelReader } from './channel-reader';
import { Channel } from './interfaces/channel';
import {
	buildHeader,
	buildNewsFull,
	buildThreadPreviews
} from './format-building';

const printThreads = (channel: Channel): void => {
	buildHeader(channel);

	channel.item.forEach(item => {
		buildThreadPreviews({
			category: item['category'],
			creator: item['dc:creator'][0],
			link: item['link'],
			time: item['pubDate'],
			title: item['title']
		});
	});
};

const printThreadFull = (channel: Channel, link: string): void => {
	const threadArray = channel.item.filter(item => item['link'][0] === link);

	if (threadArray.length > 0) {
		const thread = threadArray[0];

		buildNewsFull({
			category: thread['category'],
			contentEncoded: thread['content:encoded'],
			creator: thread['dc:creator'][0],
			link: thread['link'],
			time: thread['pubDate'],
			title: thread['title']
		});
	} else {
		console.log('Тред не найден :(');
	}
};

export const printThread = (link?: string) => {
	const reader = new ChannelReader('https://svtv.org/thread/rss/');

	reader
		.read()
		.then(channel => {
			if (link) {
				printThreadFull(channel, link);
			} else {
				printThreads(channel);
			}
		})
		.catch(error => console.error(error));
};
