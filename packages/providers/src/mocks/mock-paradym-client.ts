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


    switch(path) {


      case "/credentials/issue":

        return {
          credentialId:
            crypto.randomUUID(),

          credentialData:
            body
        };


      case "/presentations/request":

        return {
          presentation:
            body
        };


      case "/credentials/revoke":

        return {
          success:true
        };


      default:

        throw new Error(
          `Unknown mock endpoint: ${path}`
        );

    }

  }

}