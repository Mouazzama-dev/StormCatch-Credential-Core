export interface CredentialIssueRequest {

  credentialType: string;

  subjectDid: string;

  claims: Record<string, unknown>;

}



export interface CredentialIssueResponse {

  credentialId: string;

  credentialData: unknown;

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