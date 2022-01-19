import { ChannelReader } from './channel-reader';
import { Channel } from './interfaces/channel';
import { factcheckingStatus } from './factchecking-status';
import { buildFactCheckingPreviews, buildHeader } from './format-building';

const printFactcheckingPreviews = (channel: Channel) => {
	buildHeader(channel);

	channel.item.forEach(item => {
		factcheckingStatus(item['link'][0])
			.then(status => {
				buildFactCheckingPreviews(
					{
						time: item['pubDate'],
						link: item['link'],
						category: item['category'],
						creator: item['dc:creator'][0],
						title: item['title']
					},
					status
				);
			})
			.catch(error => console.error(error));
	});
};

export const printFactchecking = () => {
	const reader = new ChannelReader('https://svtv.org/factchecking/rss/');

	reader
		.read()
		.then(channel => {
			printFactcheckingPreviews(channel);
		})
		.catch(error => console.error(error));
};
