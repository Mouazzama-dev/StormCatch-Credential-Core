import { ParadymClient } from "./paradym-client.js";

import type {
  PresentationRequest,
  PresentationResponse
} from "./types.js";


export class ParadymVerifier {


  constructor(
    private readonly client: ParadymClient
  ) {}



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

}