import type {
  ParadymConfig
} from "@stormcatch/providers";


export const appConfig = {

  useMock:   process.env.USE_MOCK !== "false",

  paradym: {

    baseUrl:
      process.env.PARADYM_BASE_URL!,

    apiKey:
      process.env.PARADYM_API_KEY!,

    walletId:
      process.env.PARADYM_WALLET_ID!,

    templates: {

      PayloadCredential: {

  templateId:
    "cmsgzljlg000b02s60l1t6r18",

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