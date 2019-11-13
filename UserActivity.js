const axios = require('axios');

const server = "http://localhost:3001" +"/";

const incrementVisits = () => axios.post(server+ "visits").then(r => r.data);

const getVisits = () => axios.get(server+ "visits").then(r => r.data);

module.exports = {
	incrementVisits,
	getVisits
}
