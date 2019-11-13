const express = require('express')
const app = express()
const port = 3000

const UserActivity = require('./UserActivity');

// me sale la duda que pa sa asi commiteo ahora
app.get('/healthCheck', (req, res) => {
        res.send("Up & Running");
})


app.get('/', (req, res) => {
	UserActivity.incrementVisits()
		.then( r => console.log(r));
	res.send('Tried to increment!');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
