import { handler } from "./index";

describe("handler", () => {
  it('should return "Hello MARIA"', async () => {
    const response = await handler();
    expect(response.body).toBe("Hello MARIA");
  });
});
