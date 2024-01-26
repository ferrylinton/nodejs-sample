const { exec } = require("child_process");
const http = require('http');

var options = {
    host: '127.0.0.1',
    port: 5001,
    timeout: 5000,
    path: '/api/tags',
    method: 'GET'
};
console.log(new Date().toISOString());
http.request(options, (res) => {
    let data = ''

    res.on('data', (chunk) => {
        data += chunk;
    });
 
    res.on('end', () => {
        console.log('Body:', JSON.parse(data))
    });

}).on("error", (err) => {
    console.log("Error: ", err);
    exec("pm2 resurrect", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}).end()

