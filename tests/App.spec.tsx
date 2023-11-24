// @ts-check
import { test, expect } from "@playwright/experimental-ct-react";
import App from "../src/App";
import React from "react";

test.use({ viewport: { width: 500, height: 500 } });

test("should work", async ({ mount }) => {
  const component = await mount(<App />);
  await expect(component).toHaveText("App Component");
});
