import { ChannelReader } from './channel-reader';
import { buildHeader, buildOpinionPreviews } from './format-building';

export const printOpinions = (): void => {
	const reader = new ChannelReader('https://svtv.org/opinion/rss/');

	reader
		.read()
		.then(channel => {
			buildHeader(channel);

			channel.item.forEach(item => {
				buildOpinionPreviews({
					time: item['pubDate'],
					link: item['link'],
					category: item['category'],
					creator: item['dc:creator'][0],
					title: item['title']
				});
			});
		})
		.catch(error => console.error(error));
};
