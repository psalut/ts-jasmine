import { add } from "./math";

describe("add none integers", () => {
  it("should return zero", () => {
    expect(add('')).toBe(0);
  });
});

describe("add 1 integer1", () => {
  it("should add 5", () => {
    expect(add('5')).toBe(5);
  });
});


describe("add 2 integers", () => {
  it("should add 1 and 2", () => {
    expect(add('1,2')).toBe(3);
  });

  it("should add 4 and 2", () => {
    expect(add('4,2')).toBe(6);
  });
});

describe("add 3 integers", () => {
  it("should add 3, 8 and 7", () => {
    expect(add('3,8,7')).toBe(18);
  });
});

describe("add integers with newline char after a number", () => {
  it("should add 1, 2, 4, 5 and 6", () => {
    expect(add('1,2,4\n5,6')).toBe(18);
  })
})

describe("add integers with custom delimitator", () => {
  it("shoud add 1, 3, 6, 4", () => {
    expect(add('//;\n1;3;6;4')).toBe(14);
  })

  it("shoud add 1, 3, 6, 4", () => {
    expect(add('//|\n1|3|6|4')).toBe(14);
  })
})

