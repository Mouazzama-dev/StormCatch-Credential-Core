import { CredentialStatus } from "./credential-status.js";

export interface CredentialRecord {
  id: string;

  type: string;

  issuerId: string;

  subjectId: string;

  claims: Record<string, unknown>;

  status: CredentialStatus;

  issuedAt: Date;

  validFrom: Date;

  validUntil?: Date;

  revokedAt?: Date;
}