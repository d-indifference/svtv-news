# SVTV News [![NPM version](https://img.shields.io/npm/v/svtv-news.svg?style=flat)](https://www.npmjs.com/package/svtv-news) [![NPM monthly downloads](https://img.shields.io/npm/dm/svtv-news.svg?style=flat)](https://npmjs.org/package/svtv-news) [![NPM total downloads](https://img.shields.io/npm/dt/svtv-news.svg?style=flat)](https://npmjs.org/package/svtv-news)

Простой терминальный клиент для SVTV News [svtv.org](https://svtv.org/)

## Подготовка к установке

Данный клиент написан для платформы Node.js. 
Прежде чем устанавливать клиент, убедитесь, что у вас на компьютере стоит Node.js версии 17.0 и выше.

Для этого необходимо ввести в терминале команду:

    $ npm -v

Если Node.js не установлена, [с официального сайта](https://nodejs.org/) можно скачать установщик для Windows, Mac OS или же архивы с исходным кодом платформы.

## Установка

    $ npm install -g svtv-news

## Использование

Для того чтобы прочитать короткую инструкцию по пользованию клиентом, в терминале необходимо ввести команду

    $ svtv-news --help

```
Usage: index [options] [command]

Options:
  -h, --help      display help for command

Commands:
  news [link]     Новости
  opinion         Мнения
  thread [link]   Треды
  factchecking    Фактчекинг
  help [command]  display help for command
```

## Лицензия

MIT © [Demon of Indifference](https://twitter.com/d_indifference)
