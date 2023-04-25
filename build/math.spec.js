"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math");
describe("add none integers", () => {
    it("should return zero", () => {
        expect((0, math_1.add)('')).toBe(0);
    });
});
describe("add 1 integer1", () => {
    it("should add 5", () => {
        expect((0, math_1.add)('5')).toBe(5);
    });
});
describe("add 2 integers", () => {
    it("should add 1 and 2", () => {
        expect((0, math_1.add)('1,2')).toBe(3);
    });
    it("should add 4 and 2", () => {
        expect((0, math_1.add)('4,2')).toBe(6);
    });
});
describe("add 3 integers", () => {
    it("should add 3, 8 and 7", () => {
        expect((0, math_1.add)('3,8,7')).toBe(18);
    });
});
describe("add integers with newline char after a number", () => {
    it("should add 1, 2, 4, 5 and 6", () => {
        expect((0, math_1.add)('1,2,4\n5,6')).toBe(18);
    });
});
describe("add integers with custom delimitator", () => {
    it("shoud add 1, 3, 6, 4", () => {
        expect((0, math_1.add)('//;\n1;3;6;4')).toBe(14);
    });
    it("shoud add 1, 3, 6, 4", () => {
        expect((0, math_1.add)('//|\n1|3|6|4')).toBe(14);
    });
});
