import { ChannelReader } from '../../utils/channel-reader';
import { DateTime } from 'luxon';
import { Channel } from '../../interfaces/channel';
import { NewsPreview } from '../../interfaces/news-preview';
import { Command } from 'commander';
import { TerminalCommand } from './terminal-command';
import { SVTV_URL, VERSION_NUMBER } from '../../utils/consts';

export abstract class Section implements TerminalCommand {
	protected name: string;

	protected description: string;

	protected readonly channelReader: ChannelReader;

	constructor(name: string, description: string) {
		this.name = name;
		this.description = description;
		this.channelReader = new ChannelReader(`${SVTV_URL}${name}/rss/`);
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
		console.log(`\nSVTV NEWS CONSOLE CLIENT v${VERSION_NUMBER}\n`.bold);
		console.log(
			`══ ${DateTime.fromJSDate(new Date(channel.lastBuildDate)).toFormat(
				'DDD'
			)} ═════════════════════════════════════════════════\n`
		);
	}

	protected twirlTimer() {
		const h = ['|', '/', '-', '\\'];
		let i = 0;

		return setInterval(() => {
			i = i > 3 ? 0 : i;
			console.clear();
			console.log(h[i]);
			i++;
		}, 300);
	}

	protected abstract listItem<T extends NewsPreview>(fields: T): void;
}
