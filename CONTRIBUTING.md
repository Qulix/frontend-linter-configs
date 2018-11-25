# Contributing Guide

### Table of contents
 - [Semver](#Semver)
 - [GitHubFlow](#GitHubFlow)
 - [Commit Style](#Commit-Style)
 - [Changelog](#Changelog)
 - [Continuous Integration](#Continuous-Integration)
 - [Testing](#Testing)

# Semver

Версии пакетов выставляются в соответствии с [semver](https://semver.org/). 

# Commit Style

Коммиты пишем по [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/). С этой конвенцией, работают большинство библиотек, которые позволяют генерировать CHANGELOG.md и автоматический обновлять версии пакетов.

# GitHubFlow

Для рабочего процесса ветвления был выбран [GitHubFlow](https://guides.github.com/introduction/flow/).
Данный тип ветвления, отлично подходит под проекты, где deploy пакетов осуществляется регулярно.

Файлы конфигурации шаблонов github находятся в [.github](https://github.com/rhysd/dot-github)

# Changelog

После выхода новое версии пакета, должен быть автоматический сгенерирован CHANGELOG.md, с изменениями для пакета, который выходит в релиз.

# Continuous Integration

В качестве CI был выбран **TravisCI**, из-за возможности построения матриц расширений.

Матрица расширений позволяет производить сборку на различных версиях платформ и переменных окружения, для которых собираются пакеты.

Релизы доставляются в npm, только на lts версиях node.js

# Testing

Для тестирования используется стандартная библиотека assert в Node.js. На плагины пишутся регрессионные тесты, которые позволяют отследить ошибки в плагинах при изменении версий пакетов.
