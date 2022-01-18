import { NewsPreview } from './news-preview';

export interface News extends NewsPreview {
	contentEncoded: string;
}
