import type {
  ParadymConfig
} from "@stormcatch/providers";


export const appConfig = {

  useMock: true,


  paradym: {

    baseUrl:
      "https://api.paradym.id",

    apiKey:
      "replace-with-real-key",

    walletId:
      "mock-wallet",

    templates: {

      PayloadCredential: {

        templateId:
          "mock-payload-template",

        format:
          "sd-jwt-vc"

      },

      StateAttestationCredential: {

        templateId:
          "mock-state-template",

        format:
          "sd-jwt-vc"

      }

    }

  } satisfies ParadymConfig

};