"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEndingByValue = void 0;
var getEndingByValue = function (value, types, postfix) {
    if (((value % 10) > 4) || (value > 4 && value < 20) || ((value % 10) === 0)) {
        return "".concat(value, " ").concat(types['other']).concat(postfix !== null && postfix !== void 0 ? postfix : ' назад');
    }
    else if (value % 10 === 1) {
        return "".concat(value, " ").concat(types['1']).concat(postfix !== null && postfix !== void 0 ? postfix : ' назад');
    }
    else {
        return "".concat(value, " ").concat(types['2-4']).concat(postfix !== null && postfix !== void 0 ? postfix : ' назад');
    }
};
exports.getEndingByValue = getEndingByValue;
