"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatApiUrl = exports.removeAllLeadingSlashes = void 0;
const config_1 = require("./config");
function removeAllLeadingSlashes(inputString) {
    let startIndex = 0;
    while (startIndex < inputString.length && inputString[startIndex] === "/") {
        startIndex++;
    }
    return inputString.substring(startIndex);
}
exports.removeAllLeadingSlashes = removeAllLeadingSlashes;
const formatApiUrl = (url) => {
    url = removeAllLeadingSlashes(url);
    return `${config_1.API}/${url}`;
};
exports.formatApiUrl = formatApiUrl;
