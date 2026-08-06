import type { ParadymApiClient }
from "./paradym-api-client.js";
import type {
  CredentialIssueRequest,
  CredentialIssueResponse
} from "./types.js";

import {
  ParadymEndpoints
} from "./endpoints.js";

import {
 mapCredentialRequest,
 mapCredentialResponse,
 mapRevocationRequest
} from "./mapper.js";

export class ParadymIssuer {


  constructor(
  private readonly client: ParadymApiClient
) {}


  async issue(
    request: CredentialIssueRequest
  ): Promise<CredentialIssueResponse> {


    const response =
      await this.client.post(
        ParadymEndpoints.ISSUE_CREDENTIAL,
          mapCredentialRequest(request)

      );


    return mapCredentialResponse(response);

  }



  async revoke(
    request: {
      credentialId: string;
      issuerDid: string;
      reason?: string;
    }
  ): Promise<void> {


await this.client.post(
  ParadymEndpoints.REVOKE_CREDENTIAL,
  mapRevocationRequest(request)
);

  }

}