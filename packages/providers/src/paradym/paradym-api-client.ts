export interface ParadymApiClient {

  post(
    path: string,
    body: unknown
  ): Promise<unknown>;

}