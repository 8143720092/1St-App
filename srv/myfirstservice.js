const myfirstservice = function(srv) {
    srv.on('Hello', (req) =>  {
        return "Hello" + req.data.to + "!";
    });
 }
 module.exports = myfirstservice
   