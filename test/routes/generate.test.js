import { test } from "tap";
import { build } from "../helper.js";

const testDataUrl =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQYV2NgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII=";

test("generate is loaded", async (t) => {
  const app = await build(t);

  const res = await app.inject({
    method: "POST",
    url: "/generate",
    payload: { image: testDataUrl },
  });
  t.equal(
    res.payload,
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAADElEQVR4nGNgoBwAAABEAAHX40j9AAAAAElFTkSuQmCC",
  );
});
