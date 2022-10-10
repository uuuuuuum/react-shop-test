import { render, screen } from "@testing-library/react";
import { server } from "../../../mocks/server";
import Type from "../Type";
import { rest } from "msw";

test("display product images form server", async () => {
  render(<Type orderType="products" />);

  const productImages = await screen.findAllByRole("img", {
    name: /product$/i,
  });

  expect(productImages).toHaveLength(2);

  const altText = productImages.map((element) => element.alt);
  expect(altText).toEqual(["America product", "England product"]);
});
