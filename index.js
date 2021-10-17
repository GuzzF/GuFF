var tmi = require('tmi.js');
var options = 
{
	options: 
	{
		debug: true
	},
	connection: 
	{
		cluster: "aws",
		reconnect: true
	},
	identity: 
	{
		username: "lucasvictor_c",
		password: "oauth:xv8nmc6t36vj2jo2ux9myn42gtgavp",  
	},
	channels: ['#gaules', '#cachorro1337c', '#saullo', '#murilo_rt', '#zanfas_cenegal', '#csrfps', '#PlayHard', '#brnwowzk1',] //ADICIONA OS CANAIS AQ COM '#NOME'
};

var client = new tmi.client(options);

	client.connect();
	client.on("connected", function (address, port)
	{
		console.log("address: " + address + " port: " + port);
		client.action("999mateus", "Hello 999mateus!")
	});
