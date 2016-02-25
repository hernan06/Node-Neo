var http = require("http");
var url = require("url");
var neo4j = require('node-neo4j');


function start(route,handle) {
	db = new neo4j('http://neo4j:labPr0t0@200.126.23.138:7474');
	db.insertNode({
	    code: '000002',
	    ip: '192.168.0.2',
	    online: true,
            model: 'UNO',
            type: 'Arduino'
	},function(err, node){
	    if(err) throw err;

	    // Output node properties.
	    console.log(node.data);

	    // Output node id.
	    console.log(node._id);
	});
}

exports.start = start;
