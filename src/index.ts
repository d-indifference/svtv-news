import { Command } from 'commander';
import { printNews } from './print-news';
import { printOpinions } from './print-opinions';

const program = new Command();

program
	.command('news')
	.description('Новости')
	.argument('[link]', 'Ссылка на новость')
	.action(link => {
		printNews(link);
	});

program
	.command('opinion')
	.description('Мнения')
	.action(() => {
		printOpinions();
	});

program.parse();
