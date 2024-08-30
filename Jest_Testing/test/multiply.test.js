const {multiply} = require("../multiply");

describe("testing multiply", () => {
  test("should be mulitplying 2 numbers", ()=>{
    expect(multiply(4,5)).toEqual(20);
  });
  test("should be adding 2 numbers", ()=>{
    expect(multiply(-4,-6)).toEqual(24);
  });
})