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
  mapCredentialResponse,
  mapRevocationRequest,
  mapIssuancePayload
} from "./mapper.js";

import {
  getCredentialTemplate
} from "./credential-template.js";

import {
  withWalletId
} from "./url.js";

import type { ParadymConfig }
from "./config.js";


export class ParadymIssuer {


  constructor(
    private readonly client: ParadymApiClient,
    private readonly config: ParadymConfig
  ) {}



  async issue(
    request: CredentialIssueRequest
  ): Promise<CredentialIssueResponse> {


    const template =
      getCredentialTemplate(
        request.credentialType,
        this.config.templates
      );


    const payload =
      mapIssuancePayload(
        request,
        template
      );


    const endpoint =
      withWalletId(
        ParadymEndpoints.CREATE_CREDENTIAL_OFFER,
        this.config.walletId
      );


    const response =
      await this.client.post(
        endpoint,
        payload
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


    const endpoint =
      withWalletId(
        ParadymEndpoints.REVOKE_CREDENTIAL,
        this.config.walletId
      );


    await this.client.post(
      endpoint,
      mapRevocationRequest(request)
    );

  }

}