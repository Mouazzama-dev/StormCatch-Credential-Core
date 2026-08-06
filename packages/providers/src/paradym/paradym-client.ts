import type { ParadymConfig } from "./config.js";
import type { ParadymApiClient } 
from "./paradym-api-client.js";

export class ParadymClient implements ParadymApiClient  {

  constructor(
    private readonly config: ParadymConfig
  ) {}


  async post(
    path: string,
    body: unknown
  ): Promise<unknown> {


    const response = await fetch(
      `${this.config.baseUrl}${path}`,
      {
        method: "POST",

        headers: {
  "Content-Type": "application/json",

  "Authorization":
    `Bearer ${this.config.apiKey}`,

  ...(this.config.tenantId
    ? {
        "X-Tenant-ID": this.config.tenantId
      }
    : {})
},

        body: JSON.stringify(body)
      }
    );


    if (!response.ok) {
        const error = await response.text();

      throw new Error(
        `Paradym API error: ${response.status}: ${error}`
      );

    }


    return await response.json();

  }

}