import type {
  CredentialProvider
} from "../providers/credential-provider.js";

import type {
  CredentialRecord
} from "../credential-record.js";


import {
  CredentialStatus
} from "../credential-status.js";


export class CredentialLifecycleService {


  constructor(
    private readonly provider: CredentialProvider
  ) {}



  async issue(
    credential: CredentialRecord
  ): Promise<CredentialRecord> {


    await this.provider.issueCredential({

  credentialType: credential.type,

  issuerDid: credential.issuerId,

  subjectDid: credential.subjectId,

  claims: credential.claims

});

    return {
      ...credential,
      status: CredentialStatus.ACTIVE,
      issuedAt: new Date()
    };

  }



async revoke(
 credential: CredentialRecord
): Promise<CredentialRecord> {


 await this.provider.revokeCredential({

   credentialId: credential.id,

   issuerDid: credential.issuerId,

   reason:"manual_revocation"

 });


 return {

   ...credential,

   status: CredentialStatus.REVOKED,

   revokedAt:new Date()

 };

}

async present(
  request: {
    verifierDid: string;

    credentialTypes: string[];

    claims?: Record<string,string[]>;
  }
): Promise<unknown> {


  return this.provider.requestPresentation(
    request
  );

}
}