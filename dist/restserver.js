#!/usr/bin/env nodejs
"use strict";
/* restserver.js
 * npm i express
 * npm i helmet
 * npm i bs58
 * npm i -D nodemon
 * run for development with: $npx nodemon restserver.js
 *
 * NodeJS Restful Server, 03-2021
 * Klaus Ruhland, HSZG, Betriebssysteme II, Web Engineering II
 * Test with curl
 * 1.) curl  "http://localhost:8000/service/users?id=4&token=sdfa3&geo=us"
 * 2.) curl http://localhost:8000/service/test/12345
 * 3.) curl -d "param1=value1&param2=value2" -X POST http://localhost:8000/service/users
 *
 * 2.) mit Base58 encoding
 * curl http://localhost:8000/service/test-b58/79jdpA
 * Base58 online encoding with https://appdevtools.com/base58-encoder-decoder
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const bs58_1 = __importDefault(require("bs58"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// initializations
app.use((0, helmet_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// Routing Examples
// http GET: http://localhost:8000/service/users?id=4&token=sdfa3&geo=us
// Paremeter through ? in url 
app.get('/service/users', function (req, res) {
    res.json(req.query);
});
// http GET: http://localhost:8000/service/test/12345
// Parameter through path
app.get('/service/test/:version', function (req, res) {
    res.json(req.params);
});
// http GET: curl http://localhost:8000/service/test-b58/79jdpA
// Parameter through path with base58 decoding
// 79jdpA is a base58 encoded 😏
app.get('/service/test-b58/:b58version', function (req, res) {
    let b58versionstring = req.params.b58version;
    const bytes = bs58_1.default.decode(b58versionstring);
    const version = Buffer.from(bytes).toString("utf8");
    let result = {
        version: version
    };
    res.json(result);
});
// http POST: http://localhost:8000/service/users
app.post('/service/users', function (req, res) {
    res.json(req.body);
});
//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function (req, res) { res.status(404).send('file not found'); });
app.post('*', function (req, res) { res.status(404).send('file not found'); });
// Running the server
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
//# sourceMappingURL=restserver.js.map