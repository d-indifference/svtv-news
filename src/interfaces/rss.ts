import { Channel } from './channel';

export interface Rss {
	rss: {
		channel: Array<Channel>;
	};
}
