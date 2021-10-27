import { handler } from "./index";

describe("handler", () => {
  it('should return "Hello DAVID"', async () => {
    const response = await handler();
    expect(response.body).toBe("Hello DAVID");
  });
});
