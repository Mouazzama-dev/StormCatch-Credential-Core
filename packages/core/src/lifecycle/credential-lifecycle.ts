import { CredentialStatus } from "../credential-status.js";
import type { CredentialRecord } from "../credential-record.js";


export function isCredentialExpired(
  credential: CredentialRecord,
  now: Date = new Date()
): boolean {

  if (!credential.validUntil) {
    return false;
  }

  return now > credential.validUntil;
}


export function canRevoke(
  credential: CredentialRecord
): boolean {

  return credential.status === CredentialStatus.ACTIVE;
}


export function revokeCredential(
  credential: CredentialRecord,
  revokedAt: Date = new Date()
): CredentialRecord {

  if (!canRevoke(credential)) {
    throw new Error(
      "Only active credentials can be revoked"
    );
  }


  return {
    ...credential,
    status: CredentialStatus.REVOKED,
    revokedAt
  };
}