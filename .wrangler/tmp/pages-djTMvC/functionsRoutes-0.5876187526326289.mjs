import { onRequestGet as __api_test_ts_onRequestGet } from "/Users/landon/src/github.com/landonturner/supertokens-cloudflare/functions/api/test.ts"

export const routes = [
    {
      routePath: "/api/test",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_test_ts_onRequestGet],
    },
  ]