import { ChannelReader } from './channel-reader';
import { buildOpinionPreviews } from './format-building';
import { DateTime } from 'luxon';

export const printOpinions = (): void => {
	const reader = new ChannelReader('https://svtv.org/opinion/rss/');

	reader
		.read()
		.then(channel => {
			console.log('\nSVTV NEWS CONSOLE CLIENT v0.0.0\n'.bold);
			console.log(
				`══ ${DateTime.fromJSDate(
					new Date(channel.lastBuildDate)
				).toFormat(
					'DDD'
				)} ═════════════════════════════════════════════════\n`
			);

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
