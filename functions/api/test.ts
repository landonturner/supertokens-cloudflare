import { getSupertokensConfig } from "../../src/supertokensConfig";
import supertokens from "supertokens-node";

type Env = {};

// data to be passed around created from middleware
type Data = {
  userId?: string;
};

// auth middleware. comment this out and line 2 to validate worker setup.
function authMiddleware({
  request,
  data,
  next,
}: EventContext<Env, string, Data>) {
  console.log("initializing supertokens and setting auth now on data");
  supertokens.init(getSupertokensConfig());
  data.userId = "foo";
  return next(request);
}

// business logic
function returnStatus({ data }: EventContext<Env, string, Data>) {
  console.log(`userId: ${data.userId ?? "unknown"}`);
  return new Response(JSON.stringify({ status: "ok" }));
}

// middleware chained together
export const onRequestGet = [authMiddleware, returnStatus];
// export const onRequestGet = [returnStatus];
