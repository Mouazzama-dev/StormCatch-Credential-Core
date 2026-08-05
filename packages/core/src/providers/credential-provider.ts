export interface CredentialProvider {

  issueCredential(
    credentialRequest: {
      credentialType: string;

      issuerDid: string;

      subjectDid: string;

      claims: Record<string, unknown>;
    }
  ): Promise<unknown>;



    requestPresentation(
    presentationRequest: {
        verifierDid: string;

        credentialTypes: string[];

        claims?: Record<string, string[]>;
    }
    ): Promise<unknown>;



    revokeCredential(
    request: {
        credentialId: string;

        issuerDid: string;

        reason?: string;
    }
    ): Promise<void>;
}