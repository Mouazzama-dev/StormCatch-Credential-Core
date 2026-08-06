import type { ParadymApiClient }
from "./paradym-api-client.js";

import type { ParadymConfig }
from "./config.js";

import type {
  PresentationRequest,
  PresentationResponse
} from "./types.js";

import {
  mapPresentationRequest,
  mapPresentationResponse
} from "./mapper.js";

import {
  ParadymEndpoints
} from "./endpoints.js";

import {
  withWalletId
} from "./url.js";


export class ParadymVerifier {


  constructor(
    private readonly client: ParadymApiClient,
    private readonly config: ParadymConfig
  ) {}



  async requestPresentation(
    request: PresentationRequest
  ): Promise<PresentationResponse> {


    const endpoint =
      withWalletId(
        ParadymEndpoints.REQUEST_PRESENTATION,
        this.config.walletId
      );


    const response =
      await this.client.post(
        endpoint,
        mapPresentationRequest(request)
      );


    return mapPresentationResponse(response);

  }

}