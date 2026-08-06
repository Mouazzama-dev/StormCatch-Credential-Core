import type { ParadymApiClient } 
from "../paradym/paradym-api-client.js";


export class MockParadymClient
implements ParadymApiClient {


  async post(
    path: string,
    body: unknown
  ): Promise<unknown> {


    console.log(
      "[MOCK PARADYM]",
      path,
      body
    );


    if (
      path.includes(
        "/openid4vc/issuance/offer"
      )
    ) {

      return {

        id:
          "mock-issuance-001",

        status:
          "pending",

        offerUri:
          "openid-credential-offer://mock-offer",

        offerQrUri:
          "mock-qr-code",

        request:
          body

      };

    }


    if (
      path.includes(
        "/openid4vc/verification/request"
      )
    ) {

      return {

        presentationRequest:
          body

      };

    }


    if (
      path.includes(
        "/credentials/revoke"
      )
    ) {

      return {

        success:
          true,

        revokedAt:
          new Date()

      };

    }


    throw new Error(
      `Unknown mock endpoint: ${path}`
    );

  }

}