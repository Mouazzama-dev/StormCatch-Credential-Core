import { CredentialRegistry } from "../credential-registry.js";

import {
  BirthCertificateCredential,
  PayloadCredential,
  StateAttestationCredential,
  TaskAuthorizationCredential
} from "../index.js";


export function createPilotCredentialRegistry():

CredentialRegistry {

  const registry = new CredentialRegistry();


  registry.register(
    BirthCertificateCredential
  );


  registry.register(
    TaskAuthorizationCredential
  );


  registry.register(
    PayloadCredential
  );


  registry.register(
    StateAttestationCredential
  );


  return registry;
}