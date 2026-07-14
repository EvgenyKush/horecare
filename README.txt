CoolBrew / Horecare — статический сайт для обычного хостинга
============================================================

Содержимое этой папки готово к загрузке на любой shared/VPS хостинг
(cPanel, ISPmanager, Timeweb, Beget, nginx/apache static и т.д.).

Файлы
-----
index.html   — полная landing-страница (все виджеты в воронке)
bridge.js    — общий API CoolBrew (связь виджетов)
style.css    — оформление страницы и навигация

Деплой
------
1. Загрузите ВСЕ файлы из hosting/ в корень сайта или подпапку
   (public_html, www, htdocs, /var/www/html/...).
2. Откройте https://ваш-домен/index.html
3. PHP, Node.js и база данных НЕ требуются.

Fly.io
------
Вариант A (рекомендуется) — из корня coolbrew-calculator/:

  python build.py
  fly deploy

Вариант B — из hosting/:

  .\deploy.ps1

build.py копирует assets/coffee-box.png → hosting/assets/ и генерирует
Dockerfile в корне проекта. Без coffee-box.png сборка упадёт.

app по умолчанию: horecare (fly.toml)

Опционально: чат / заявки
-------------------------
Кнопки «Danışmanlık», «Tadım talep et» вызывают CoolBrew.prompt(text).
Подключите свой виджет чата, определив на странице:

  window.sendPrompt = function(text) {
    // ваш чат: Intercom, Tawk, Telegram bot, форма и т.д.
  };

Без sendPrompt показывается блок #cb-prompt-fallback с текстом запроса.

Пересборка
----------
После правок виджетов (../embed.html):

  python ../build.py

Скрипт обновит embed.min.html и перегенерирует hosting/index.html.

Структура страницы (сверху вниз)
--------------------------------
1. Преимущества (#cbadv)
2. Сегменты бизнеса (#cbbiz)
3. Сравнение с зерном (#cbvs2)
4. Каталог (#cbcat)
5. Дозировки (#cbdz)
6. 3 шага внедрения (#cbstp)
7. ROI-кейс (#cbroi)
8. Калькулятор (#cbfc)
9. FAQ (#cbfaq)
