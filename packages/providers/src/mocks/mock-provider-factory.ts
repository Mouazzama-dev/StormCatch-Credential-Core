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


export function createMockParadymProvider(){

  const client =
    new MockParadymClient();


  const issuer =
    new ParadymIssuer(client);


  const verifier =
    new ParadymVerifier(client);


  const wallet =
    new ParadymWallet(client);


  return new ParadymProvider(
    issuer,
    verifier,
    wallet
  );

}