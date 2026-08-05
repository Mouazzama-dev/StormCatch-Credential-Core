import type { ParadymApiClient }
from "./paradym-api-client.js";

export class ParadymWallet {


  constructor(
  private readonly client: ParadymApiClient
) {}



  async listCredentials(): Promise<unknown> {


    return await this.client.post(
      "/wallet/credentials/list",
      {}
    );

  }



  async getCredential(
    credentialId: string
  ): Promise<unknown> {


    return await this.client.post(
      "/wallet/credentials/get",
      {
        credentialId
      }
    );

  }



  async preparePresentation(
    credentialIds: string[]
  ): Promise<unknown> {


    return await this.client.post(
      "/wallet/presentation/prepare",
      {
        credentialIds
      }
    );

  }

}