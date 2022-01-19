# SVTV News

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
