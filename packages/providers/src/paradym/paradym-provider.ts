import type { CredentialProvider } from "@stormcatch/core";

import type {
  CredentialIssueRequest,
  CredentialIssueResponse,
  PresentationRequest,
  PresentationResponse,
  RevocationRequest
} from "./types.js";

import { ParadymClient } from "./paradym-client.js";




export class ParadymProvider
implements CredentialProvider {


  constructor(
    private readonly client: ParadymClient
  ) {}


  async issueCredential(
    request: CredentialIssueRequest
  ): Promise<CredentialIssueResponse> {


    const response =
      await this.client.post(
        "/credentials/issue",
        request
      );


    return response as CredentialIssueResponse;

  }



  async requestPresentation(
    request: PresentationRequest
  ): Promise<PresentationResponse> {


    const response =
      await this.client.post(
        "/presentations/request",
        request
      );


    return response as PresentationResponse;

  }

  




  async revokeCredential(
 request:{
   credentialId:string;
   issuerDid:string;
   reason?:string;
 }
): Promise<void> {


 await this.client.post(
   "/credentials/revoke",
   request
 );

}

}