import { getAPIKey } from "src/api/auth";
import { describe, expect, test } from "vitest";

const validHeaders = { authorization: "ApiKey 12345" };
const invalidHeaders = { authorization: "" };
const APIResult: string = "12345";

describe("getAPIKey function tests", () => {
  test("API key is returned", () => {
    expect(getAPIKey(validHeaders)).toBe(APIResult);
  });

  test("API key is not returned", () => {
    expect(getAPIKey(invalidHeaders)).toBe(null);
  });

  test("Empty object passed to the function", () => {
    expect(getAPIKey({})).toBeNull();
  });
});
