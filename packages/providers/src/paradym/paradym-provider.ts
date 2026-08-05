import type { CredentialProvider } from "@stormcatch/core";

import type {
  CredentialIssueRequest,
  CredentialIssueResponse,
  PresentationRequest,
  PresentationResponse,
  RevocationRequest
} from "./types.js";


import { ParadymIssuer } from "./issuer.js";
import { ParadymVerifier } from "./verifier.js";
import { ParadymWallet } from "./wallet.js";



export class ParadymProvider
implements CredentialProvider {


    constructor(
  private readonly issuer: ParadymIssuer,
  private readonly verifier: ParadymVerifier,
  private readonly wallet: ParadymWallet
){}


  async issueCredential(
    request: CredentialIssueRequest
  ): Promise<CredentialIssueResponse> {



     return this.issuer.issue(request);

  }



  async requestPresentation(
    request: PresentationRequest
  ): Promise<PresentationResponse> {


    return this.verifier.requestPresentation(request);
  }

  




  async revokeCredential(
 request:{
   credentialId:string;
   issuerDid:string;
   reason?:string;
 }
): Promise<void> {


    return this.issuer.revoke(request);
}

}