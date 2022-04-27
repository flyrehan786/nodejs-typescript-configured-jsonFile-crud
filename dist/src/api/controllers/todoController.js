"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.updated = exports.getById = exports.get = exports.create = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, "..", "..", "..", "..", "data", "data.json");
const getData = () => fs_1.default.readFileSync(filePath);
const create = (todoItem) => {
    const content = JSON.parse(getData().toString());
    todoItem.id = content.length + 1;
    content.push(todoItem);
    fs_1.default.writeFileSync(filePath, JSON.stringify(content));
};
exports.create = create;
const get = () => JSON.parse(getData().toString());
exports.get = get;
const getById = (id) => {
    const content = JSON.parse(getData().toString());
    return content.filter(x => x.id === id);
};
exports.getById = getById;
const updated = (id, updatedItem) => {
    const buffer = getData();
    const content = JSON.parse(buffer.toString());
    updatedItem.id = id;
    console.log(`content`);
    console.log(content);
    const index = content.findIndex(x => x.id === id);
    console.log(`index`);
    console.log(index);
    if (index !== -1) {
        content[index].title = updatedItem.title;
        content[index].description = updatedItem.description;
        fs_1.default.writeFileSync(filePath, JSON.stringify(content));
        return true;
    }
    else
        return false;
};
exports.updated = updated;
const remove = (id) => {
    const content = JSON.parse(getData().toString());
    const filtered = content.filter(x => x.id !== id);
    fs_1.default.writeFileSync(filePath, JSON.stringify(filtered));
};
exports.remove = remove;
