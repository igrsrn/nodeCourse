const http = require('http');

let count1 = 0,
	count2 = 0;

const server = http.createServer((req, res) => {
	console.log('Запрос получен');

	if (req.url === '/') {
		res.writeHead(200, {
			'Content-Type': 'text/html; charset=UTF-8',
		});
		res.end(`<a href="/about">About</a>
		<p>Количество просмотров ${++count1}</p>`);

	} else if (req.url === '/about') {
		res.writeHead(200, {
			'Content-Type': 'text/html; charset=UTF-8',
		});
		res.end(`<a href="/">Main</a>
		<p>Количество просмотров ${++count2}</p>`);
	} else {
		res.writeHead(404, {
			'Content-Type': 'text/html; charset=UTF-8',
		})
		res.end('<h1>Такой страницы нет</h1>');
	}
});

const port = 3000;

server.listen(port, () => {
	console.log(`Сервер запущен на порту ${port}`);
})