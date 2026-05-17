import { describe, it, expect } from "vitest";
import { isValidEmail, normalizeFormData } from "./normalizeFormData";

describe("isValidEmail", () => {
  it("should return true for valid email", () => {
    const email = "test@example.com";
    const result = isValidEmail(email);
    expect(result).toBe(true);
  });

  it("should return false for email without @", () => {
    expect(isValidEmail("invalid")).toBe(false);
  });

  it("should return false for email without domain", () => {
    expect(isValidEmail("test@")).toBe(false);
  });

  it("should return false for empty string", () => {
    expect(isValidEmail("")).toBe(false);
  });

  it("should handle email with special characters", () => {
    expect(isValidEmail("user+tag@example.com")).toBe(true);
  });

  it("should handle email with subdomain", () => {
    expect(isValidEmail("user@mail.example.com")).toBe(true);
  });
});

describe("normalizeFormData", () => {
  it("should trim whitespace from all fields", () => {
    const input = {
      name: "  John Doe  ",
      email: "  test@example.com  ",
      message: "  Hello  ",
    };
    const result = normalizeFormData(input);
    expect(result.name).toBe("John Doe");
    expect(result.email).toBe("test@example.com");
    expect(result.message).toBe("Hello");
  });

  it("should convert email to lowercase", () => {
    const input = {
      name: "John",
      email: "TEST@EXAMPLE.COM",
      message: "Hi",
    };
    const result = normalizeFormData(input);
    expect(result.email).toBe("test@example.com");
  });

  it("should not modify name case", () => {
    const input = {
      name: "John DOE",
      email: "test@example.com",
      message: "Hi",
    };
    const result = normalizeFormData(input);
    expect(result.name).toBe("John DOE");
  });
});
