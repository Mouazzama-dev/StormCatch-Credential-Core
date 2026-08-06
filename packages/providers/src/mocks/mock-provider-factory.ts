import { ParadymProvider } 
from "../paradym/paradym-provider.js";

import { ParadymIssuer }
from "../paradym/issuer.js";

import { ParadymVerifier }
from "../paradym/verifier.js";

import { ParadymWallet }
from "../paradym/wallet.js";

import { MockParadymClient }
from "./mock-paradym-client.js";

import type { ParadymConfig } from "../paradym/config.js";


export function createMockParadymProvider(){

  const client =
    new MockParadymClient();


 const config: ParadymConfig = {

  baseUrl: "mock",

  apiKey: "mock",

  walletId: "mock-wallet",

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

};


  const issuer =
    new ParadymIssuer(
      client,
      config
    );


  const verifier =
  new ParadymVerifier(
    client,
    config
  );


  const wallet =
    new ParadymWallet(client);


  return new ParadymProvider(
    issuer,
    verifier,
    wallet
  );

}