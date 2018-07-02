const entry = require("./webpack.entry.conf");
const json = require('../../package.json');//引进package.json
const newEntry = {};
for (let name in entry) {
    newEntry[name] = entry[name][0]
}
newEntry.vendor = Object.keys(json.dependencies); //把 package.json dependencies字段的值放进 vendor中
let config = {
    entry: newEntry,
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css", ".pcss"],
    }
};
module.exports = config;
