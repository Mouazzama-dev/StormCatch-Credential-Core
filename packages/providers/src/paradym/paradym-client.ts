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
      `${this.config.apiUrl}${path}`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "Authorization":
            `Bearer ${this.config.apiKey}`
        },

        body: JSON.stringify(body)
      }
    );


    if (!response.ok) {

      throw new Error(
        `Paradym API error: ${response.status}`
      );

    }


    return response.json();

  }

}