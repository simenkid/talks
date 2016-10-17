/***********************************************/
/* Is node single threaded?                    */
/*                                             */
/*  Terminal 1: $ node 01_server.js            */
/*  Terminal 2: $ pstree -ap | grep node       */
/***********************************************/

var http = require('http');

var server = http.createServer(function (req, res) {
    // Request Handler
});

server.listen(3000);
