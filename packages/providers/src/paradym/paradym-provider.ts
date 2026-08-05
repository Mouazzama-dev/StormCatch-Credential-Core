import type { CredentialProvider }
from "@stormcatch/core";


export class ParadymProvider 
implements CredentialProvider {


 async issueCredential(
  request: unknown
 ): Promise<unknown> {

  throw new Error(
    "Paradym OID4VCI implementation pending"
  );

 }


 async requestPresentation(
  request: unknown
 ): Promise<unknown> {

  throw new Error(
    "Paradym OID4VP implementation pending"
  );

 }


 async revokeCredential(
  credentialId: string
 ): Promise<void> {

  throw new Error(
    "Paradym status update implementation pending"
  );

 }

}