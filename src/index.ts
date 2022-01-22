#!/usr/bin/env node

import { Command } from 'commander';
import { NewsSection } from './sections/news-section';
import { OpinionSection } from './sections/opinion-section';
import { ThreadSection } from './sections/thread-section';
import { FactcheckingSection } from './sections/factchecking-section';
import { TranslationSection } from './sections/translation-section';

const program = new Command();

new NewsSection(
	'news',
	'Новости',
	'Ссылка на новость',
	'Новость не найдена :('
).init(program);

new OpinionSection('opinion', 'Мнения').init(program);

new ThreadSection(
	'thread',
	'Треды',
	'Ссылка на тред',
	'Тред не найден :('
).init(program);

new FactcheckingSection('factchecking', 'Фактчекинг').init(program);

new TranslationSection(
	'translation',
	'Переводы',
	'Ссылка на перевод',
	'Перевод не найден :('
).init(program);

program.parse();
