import { Command } from 'commander';
import { printNews } from './print-news';

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
		console.log('Вы открыли Мнения');
	});

program.parse();
