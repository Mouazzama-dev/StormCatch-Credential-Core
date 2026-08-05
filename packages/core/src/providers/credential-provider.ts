export interface CredentialProvider {

  issueCredential(
    credentialRequest: unknown
  ): Promise<unknown>;


  requestPresentation(
    presentationRequest: unknown
  ): Promise<unknown>;


  revokeCredential(
    credentialId: string
  ): Promise<void>;

}