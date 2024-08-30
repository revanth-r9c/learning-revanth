const {add} = require("../add");

describe("testing adding", () => {
  test("should be adding 2 numbers", ()=>{
    expect(add(4,5)).toEqual(9);
  });
  test("should be adding 2 numbers", ()=>{
    expect(add(-4,-6)).toEqual(-10);
  });
})