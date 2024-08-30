const { isPrime } = require("../isPrime");

describe("testing prime number function", () => {
  test("should return true for prime numbers", () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(13)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(17)).toBe(true);
  });

  test("should return false for non-prime numbers", () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(10)).toBe(false);
    expect(isPrime(15)).toBe(false);
  });

  test("should return false for negative numbers and zero", () => {
    expect(isPrime(-1)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(-7)).toBe(false);
  });

  test("should handle larger prime numbers", () => {
    expect(isPrime(101)).toBe(true);
    expect(isPrime(103)).toBe(true);
    expect(isPrime(107)).toBe(true);
  });

  test("should handle larger non-prime numbers", () => {
    expect(isPrime(100)).toBe(false);
    expect(isPrime(102)).toBe(false);
    expect(isPrime(104)).toBe(false);
  });
});
