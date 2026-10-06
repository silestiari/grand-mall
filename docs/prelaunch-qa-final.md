# Последний pre-launch QA — 6 октября 2026

Проверена свежая production-сборка после всех изменений мультиязычности и typography. Новых ошибок, требующих изменения приложения, не обнаружено. Дизайн, контент и страницы не менялись.

## Результаты

- `npm run lint` — успешно, без сообщений об ошибках.
- `npm run build` — успешно, TypeScript и генерация 324 страниц/служебных маршрутов завершены.
- EN/RU/KA: homepage, Stores, Dining, Entertainment, Map, Visit, Events, Offers. 192 сочетания страниц и viewport, включая 1920×1080, 1440×900, 1366×768 и mobile 430/390/375/320 px; дополнительно проверен tablet 768 px.
- Видимые крупные headings не выходят за горизонтальные границы. Broken images, отсутствующие alt attributes, внутренние PLACEHOLDER/DEMO/TEMP labels, href="#", пустые неподписанные кнопки и одиночные стрелки без действия не обнаружены. 48 проверок основных страниц Axe WCAG A/AA прошли.
- Homepage отдельно: 27 проверок EN/RU/KA, включая пять desktop-размеров и четыре mobile-размера. На desktop RU/KA hero, headline, description, CTA и нижняя информация помещаются в первый экран. RU визуально проверен на ключевых desktop-размерах; KA и RU проверены на mobile. Отдельные строки и корректный размер по высоте сохранены; английские настройки не менялись.
- 321 уникальная внутренняя ссылка отвечает HTTP 200. Якоря проверены на 24 основных страницах; недостающих целей нет.
- 151 проверка взаимодействий: Global Search по Zara, Big Chefs, CAVEA, Bowling, Oliva Café, категории и неизвестному запросу; directory filters/reset; Mall Map search, selection, floor sync, panel, View Details, Close, deeplinks и browser back; nested language switching, query/hash и mobile menu.
- Дополнительно выполнены 24 настоящих переключения языка на всех основных страницах: RU→EN, EN→KA, KA→RU. Маршрут сохраняется.
- 57 проверок страниц и representative detail pages на 320 px: metadata, canonical, hreflang, html lang, OpenGraph, overflow, hero containment и CLS. Ошибок в консоли и runtime не обнаружено; detail pages прошли дополнительные проверки доступности.
- Favicon `/icon.svg` отвечает HTTP 200. Проверены site name, OpenGraph image, title, description, canonical, hreflang и язык документа. Sticky header работает.
- 194 внешних URL проверены повторно: HTTP 404/410 не получены. Часть сайтов брендов ограничивает автоматические запросы ответами 403/429; `gmt4.ge` отвечает 503. Их полную доступность подтвердить нельзя. Подтверждённые адреса не заменялись выдуманными ссылками.
- В рабочем коде не найдены console.log, console.debug или debugger. Lint не сообщил о неиспользуемых imports; удаления наугад не выполнялись.

## Временные материалы и ограничения

- Homepage hero и часть атмосферных изображений Brands, SHOP/EAT/PLAY, homepage/lifestyle, Dining hero/table/coffee, Entertainment hero/CAVEA/Fitness/Wonderland — иллюстративные временные материалы. Официальные фотографии Stores, Dining и Bowling имеют отдельные SOURCES.md; происхождение подробно описано в [предыдущем отчёте](prelaunch-qa.md). Иконка GM временная; это не официальный brand mark.
- Mall Map пока показывает иллюстративный обзор подтверждённых этажей, а не точный план с координатами объектов. Выбор места и переключение его этажа работают.
- В проект не добавлены подтверждённые текущие Events/Offers. Datasets пусты, публичные страницы показывают нейтральные empty states. Выдуманные даты/акции не публикуются. Данные каталога статические и требуют актуализации при изменении официальных источников.
- Проверка выполнена в desktop Chrome с эмуляцией размеров экранов. Реальные Safari/iOS/Android устройства не тестировались. Проверки браузера и Axe не являются полной сертификацией доступности или оценкой live performance.

Проект технически готов к deployment в проверенном объёме. Если production domain отличается от `https://grandmall.com.ge`, до сборки задайте корректный `NEXT_PUBLIC_SITE_URL`. DNS, HTTPS и поведение опубликованного окружения проверяются после deployment. Публикация в рамках этой задачи не выполнялась.
