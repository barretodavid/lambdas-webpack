import { APIGatewayProxyResult } from "aws-lambda";
import { toUpper } from "ramda";

export const createResponse = (
  code: number,
  name: string
): APIGatewayProxyResult => ({
  statusCode: code,
  body: `Hello ${toUpper(name)}`,
});
