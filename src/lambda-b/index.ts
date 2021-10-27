import { APIGatewayProxyResult } from "aws-lambda";
import { createResponse } from "../shared/utils";

export const handler = async (): Promise<APIGatewayProxyResult> => {
  const name = "Maria";
  return createResponse(200, name);
};
