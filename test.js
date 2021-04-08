const express = require('express');
const axios = require('axios');
const http = require('http');
const httpAgent = new http.Agent({ keepAlive: true });
const botRequestClient = axios.create({
	httpAgent
});
botRequestClient.defaults.timeout = 10000;
let url = 'http://dummy-service:3000'
const app = express();
const port = 3000;
app.get('/check', (req, res) => {
	res.send('check received');
});
app.get('/timer/:token', (req, res) => {
	botRequestClient.get(`${url}/timer/${req.params.token}`).then(() => {
		res.sendStatus(200);
	}).catch((e)=>{
		console.log("error message",e.message)
		res.sendStatus(500);
	})
});
app.listen(port, () => {
	console.log(`slow app listening at http://localhost:${port}`)
})
