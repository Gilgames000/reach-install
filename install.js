const https = require("https");
const fs = require("fs");
const child_process = require('child_process');

const executableUrl = "https://docs.reach.sh/reach";

try {
    fs.unlinkSync('./bin/reach');
} catch (err) {
}

https.get(executableUrl, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
        body += data;
    });
    res.on("end", () => {
        !fs.existsSync('./bin') && fs.mkdirSync('./bin');
        fs.writeFileSync('./bin/reach', body);
        fs.chmodSync('./bin/reach', '755');

        child_process.execFile('./bin/reach', ['version'],
            (error, stdout, stderr) => {
                console.log(stdout);
                console.error(stderr);
                if (error !== null) {
                    console.log(`exec error: ${error}`);
                }
            });
    });
});
