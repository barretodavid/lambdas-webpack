import { APIGatewayProxyResult } from "aws-lambda";
import { createResponse } from "../shared/utils";

export const handler = async (): Promise<APIGatewayProxyResult> => {
  const name = "David";
  return createResponse(200, name);
};
