// @ts-check
import React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import App from "../src/App";

test.describe("app", () => {
  test("should work", async ({ mount }) => {
    const component = await mount(<App />);
    await expect(component).toHaveText(/app component/i);
  });
});
