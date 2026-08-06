export interface CredentialIssueRequest {

  credentialType: string;

  issuerDid: string;

  subjectDid: string;

  claims: Record<string, unknown>;

}



export interface CredentialIssueResponse {

  issuanceId: string;

  status: string;

  offerUri: string;

  offerQrUri?: string;

}



export interface PresentationRequest {

  verifierDid: string;

  credentialTypes: string[];

  claims?: Record<string,string[]>;

}



export interface PresentationResponse {

  presentation: unknown;

}



export interface RevocationRequest {

  credentialId: string;

  issuerDid: string;

  reason?: string;

}