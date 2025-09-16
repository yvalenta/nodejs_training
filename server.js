// seerver.mjs
import { createServer } from "node:http";
import { version } from "node:os";
import { parse } from "node:url";

const PORT = global.process?.env?.PORT || 3000;
//const PORT = process?.env?.PORT || 3000;


const server = createServer((req, res) => {
    const parseUrl = parse(req.url, true);
    console.log('parseUrl', parseUrl);
   
    const path = parseUrl.pathname;
    console.log('path', path);
   
    const query = parseUrl.query;
    console.log('query', query);
   
    const method = req.method;
    console.log('method', method);
    
    if(method === "GET") {
        switch(path) {
            case "/":
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end("Hello World\n");
                return;
            case "/health":
                res.setHeader("Content-Type", "application/json");
                res.writeHead(200);
                res.end(JSON.stringify({ 
                    status: "ok",
                    message: "Server is running",
                    uptime: process.uptime(),
                    version: process.version,
                    platform: process.platform,
                    memoryUsage: process.memoryUsage(),
                    cpuUsage: process.cpuUsage(),
                }));
                return;
            default:
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("Not Found\n");
                return;
        }
    }
});

// listen on port 3000
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

export default server;