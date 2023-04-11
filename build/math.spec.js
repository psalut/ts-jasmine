"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math");
describe("add", () => {
    it("should add two numbers", () => {
        expect((0, math_1.add)(1, 2)).toBe(3);
    });
});
