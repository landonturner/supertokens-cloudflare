import ThirdPartyEmailPassword from "supertokens-node/recipe/thirdpartyemailpassword";
import Session from "supertokens-node/recipe/session";
import SuperTokensTypes from "supertokens-node/types";

export function getSupertokensConfig(): SuperTokensTypes.TypeInput {
  return {
    framework: "awsLambda",
    supertokens: {
      connectionURI: "add connection uri",
      apiKey: "add api key",
    },
    appInfo: {
      apiDomain: "http://localhost:3000",
      appName: "supertokens cloudflare test",
    },
    recipeList: [
      ThirdPartyEmailPassword.init({
        // We have provided you with development keys which you can use for testing.
        // IMPORTANT: Please replace them with your own OAuth keys for production use.
        providers: [
          {
            config: {
              thirdPartyId: "google",
              clients: [
                {
                  clientId:
                    "1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com",
                  clientSecret: "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",
                },
              ],
            },
          },
        ],
      }),
      Session.init(),
    ],
    isInServerlessEnv: true,
  };
}
