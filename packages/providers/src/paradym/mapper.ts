import type {
  CredentialIssueRequest
} from "./types.js";


export interface ParadymCredentialRequest {

  type: string;

  issuer: string;

  subject: string;

  claims: Record<string, unknown>;

}



export function mapCredentialRequest(
  request: CredentialIssueRequest
): ParadymCredentialRequest {


  return {

    type:
      request.credentialType,

    issuer:
      request.issuerDid,

    subject:
      request.subjectDid,

    claims:
      request.claims

  };

}

import type {
  CredentialIssueResponse
} from "./types.js";


export function mapCredentialResponse(
 response: unknown
): CredentialIssueResponse {


 const data =
 response as Record<string, unknown>;


 return {

   issuanceId:
    String(data["id"]),

   status:
    String(data["status"] ?? "pending"),

   offerUri:
    String(data["offerUri"]),

   offerQrUri:
    data["offerQrUri"]
      ? String(data["offerQrUri"])
      : undefined

 };

}

import type {
  PresentationRequest,
  PresentationResponse
} from "./types.js";


export interface ParadymPresentationRequest {

  verifier:
    string;

  requestedCredentials:
    string[];

  requestedClaims?:
    Record<string,string[]>;

}



export function mapPresentationRequest(
  request: PresentationRequest
): ParadymPresentationRequest {


  return {

    verifier:
      request.verifierDid,

    requestedCredentials:
      request.credentialTypes,

    requestedClaims:
      request.claims

  };

}



export function mapPresentationResponse(
  response: unknown
): PresentationResponse {


  return {

    presentation:
      response

  };

}

import type {
  RevocationRequest
} from "./types.js";


export interface ParadymRevocationRequest {

  id: string;

  issuer: string;

  reason?: string;

}



export function mapRevocationRequest(
  request: RevocationRequest
): ParadymRevocationRequest {


  return {

    id:
      request.credentialId,

    issuer:
      request.issuerDid,

    reason:
      request.reason

  };

}

export interface ParadymIssuancePayload {

  credentialConfigurationId: string;

  format: string;

  claims: Record<string, unknown>;

}

export function mapIssuancePayload(
  request: CredentialIssueRequest,
  template: {
    templateId:string;
    format:string;
  }
): ParadymIssuancePayload {


  return {

    credentialConfigurationId:
      template.templateId,

    format:
      template.format,

    claims:
      request.claims

  };

}