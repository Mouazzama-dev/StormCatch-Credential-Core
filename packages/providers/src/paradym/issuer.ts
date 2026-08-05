import { ParadymClient } from "./paradym-client.js";
import type {
  CredentialIssueRequest,
  CredentialIssueResponse
} from "./types.js";


export class ParadymIssuer {


  constructor(
    private readonly client: ParadymClient
  ) {}



  async issue(
    request: CredentialIssueRequest
  ): Promise<CredentialIssueResponse> {


    const response =
      await this.client.post(
        "/credentials/issue",
        request
      );


    return response as CredentialIssueResponse;

  }



  async revoke(
    request: {
      credentialId: string;
      issuerDid: string;
      reason?: string;
    }
  ): Promise<void> {


    await this.client.post(
      "/credentials/revoke",
      request
    );

  }

}