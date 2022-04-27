"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const i = __importStar(require("../src/api/controllers/todoController"));
i.create({
    id: undefined,
    title: 'This is title.',
    description: 'This is description.'
});
// i.remove(1);
i.updated(1, {
    title: 'This is updated title for id: 1',
    description: 'This is updated description for id: 1'
});
// import { config } from '../config';
// import express, { Application } from 'express';
// const app: Application = express();
// app.listen(config.port, () => {
//     console.log('Listening on port: ' + config.port);
// })
