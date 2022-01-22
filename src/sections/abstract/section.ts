import { ChannelReader } from '../../utils/channel-reader';
import { DateTime } from 'luxon';
import { Channel } from '../../interfaces/channel';
import { NewsPreview } from '../../interfaces/news-preview';
import { Command } from 'commander';

export abstract class Section {
	protected name: string;

	protected description: string;

	protected readonly channelReader: ChannelReader;

	constructor(name: string, description: string) {
		this.name = name;
		this.description = description;
		this.channelReader = new ChannelReader(`https://svtv.org/${name}/rss/`);
	}

	public init(program: Command): void {
		program
			.command(this.name)
			.description(this.description)
			.action(() => {
				this.commandAction();
			});
	}

	protected commandAction(): void {
		this.channelReader
			.read()
			.then(channel => {
				this.printList(channel);
			})
			.catch(error => console.error(error));
	}

	protected printList(channel: Channel): void {
		this.printHeader(channel);

		this.printListItems(channel);
	}

	protected printListItems(channel: Channel): void {
		channel.item.forEach(item => {
			this.listItem({
				time: item['pubDate'],
				link: item['link'],
				category: item['category'],
				creator: item['dc:creator'][0],
				title: item['title']
			});
		});
	}

	protected printHeader(channel: Channel): void {
		console.log('\nSVTV NEWS CONSOLE CLIENT v1.1.2\n'.bold);
		console.log(
			`══ ${DateTime.fromJSDate(new Date(channel.lastBuildDate)).toFormat(
				'DDD'
			)} ═════════════════════════════════════════════════\n`
		);
	}

	protected abstract listItem<T extends NewsPreview>(fields: T): void;
}
