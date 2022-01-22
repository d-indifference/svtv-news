import { Section } from './section';
import { News } from '../../interfaces/news';
import { Command } from 'commander';
import { Channel } from '../../interfaces/channel';

export abstract class ArgumentSection extends Section {
	protected argDescription: string;

	protected notFoundDescription: string;

	constructor(
		name: string,
		description: string,
		argDescription: string,
		notFoundDescription: string
	) {
		super(name, description);
		this.argDescription = argDescription;
		this.notFoundDescription = notFoundDescription;
	}

	protected abstract card<T extends News>(fields: T): void;

	public init(program: Command): void {
		program
			.command(this.name)
			.description(this.description)
			.argument('[link]', this.argDescription)
			.action(link => {
				this.argCommandAction(link);
			});
	}

	protected argCommandAction(link: string): void {
		this.channelReader
			.read()
			.then(channel => {
				if (link) {
					this.printCard(channel, link.trim());
				} else {
					this.printList(channel);
				}
			})
			.catch(error => console.error(error));
	}

	protected printCard(channel: Channel, link: string): void {
		const array = channel.item.filter(item => item['link'][0] === link);

		if (array.length > 0) {
			const card = array[0];

			this.generateCard(card);
		} else {
			console.log(this.notFoundDescription);
		}
	}

	protected generateCard(card: Record<string, string>): void {
		this.card({
			category: card['category'],
			contentEncoded: card['content:encoded'],
			creator: card['dc:creator'][0],
			link: card['link'],
			time: card['pubDate'],
			title: card['title']
		});
	}
}
