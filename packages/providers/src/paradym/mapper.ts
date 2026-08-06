import type {
  CredentialIssueRequest,
  CredentialIssueResponse,
  PresentationRequest,
  PresentationResponse,
  RevocationRequest
} from "./types.js";

import type {
  ParadymCredentialTemplates
} from "./config.js";


// -------------------------
// Credential Issue Mapping
// -------------------------

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


// -------------------------
// Paradym Issuance Offer
// -------------------------

export interface ParadymIssuancePayload {

  credentials: Array<{

    credentialTemplateId: string;

    attributes: Record<string, unknown>;

  }>;

}


export function mapIssuancePayload(
  request: CredentialIssueRequest,
  template: ParadymCredentialTemplates[string]
): ParadymIssuancePayload {


  return {

    credentials: [

      {

        credentialTemplateId:
          template.templateId,


        attributes:
          request.claims

      }

    ]

  };

}


// -------------------------
// Credential Response
// -------------------------

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
      data["offerUri"]
        ? String(data["offerUri"])
        : "",

    offerQrUri:
      data["offerQrUri"]
        ? String(data["offerQrUri"])
        : undefined

  };

}


// -------------------------
// Presentation Mapping
// -------------------------

export interface ParadymPresentationRequest {

  verifier: string;

  requestedCredentials: string[];

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


// -------------------------
// Revocation Mapping
// -------------------------

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