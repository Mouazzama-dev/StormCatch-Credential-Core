import type { ParadymApiClient }
from "./paradym-api-client.js";
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


export class ParadymVerifier {


  constructor(
  private readonly client: ParadymApiClient
) {}



  async requestPresentation(
    request: PresentationRequest
  ): Promise<PresentationResponse> {

const response =
 await this.client.post(
   ParadymEndpoints.REQUEST_PRESENTATION,
   mapPresentationRequest(request)
 );


return mapPresentationResponse(response);
  }

}