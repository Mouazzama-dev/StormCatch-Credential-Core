import type { CredentialRecord } 
from "../credential-record.js";

import {
  CredentialStatus
} from "../credential-status.js";


export class CredentialLifecycleService {


  issue(
    credential: CredentialRecord
  ): CredentialRecord {

    return {
      ...credential,
      status: CredentialStatus.ACTIVE,
      issuedAt: new Date()
    };

  }



  expire(
    credential: CredentialRecord,
    now: Date = new Date()
  ): CredentialRecord {


    if (
      credential.validUntil &&
      now > credential.validUntil
    ) {

      return {
        ...credential,
        status: CredentialStatus.EXPIRED
      };

    }


    return credential;

  }



  revoke(
    credential: CredentialRecord
  ): CredentialRecord {


    if (
      credential.status !== CredentialStatus.ACTIVE
    ) {

      throw new Error(
        "Only active credentials can be revoked"
      );

    }


    return {
      ...credential,
      status: CredentialStatus.REVOKED,
      revokedAt: new Date()
    };

  }

}