import { ParadymClient } from "./paradym-client.js";

import { ParadymIssuer } from "./issuer.js";
import { ParadymVerifier } from "./verifier.js";
import { ParadymWallet } from "./wallet.js";

import { ParadymProvider } from "./paradym-provider.js";

import type { ParadymConfig } from "./config.js";


export function createParadymProvider(
  config: ParadymConfig
): ParadymProvider {


  const client =
    new ParadymClient(config);


  const issuer =
 new ParadymIssuer(
   client,
   config
 );


  const verifier =
    new ParadymVerifier(
  client,
  config
)


  const wallet =
    new ParadymWallet(client);



  return new ParadymProvider(
    issuer,
    verifier,
    wallet
  );

}