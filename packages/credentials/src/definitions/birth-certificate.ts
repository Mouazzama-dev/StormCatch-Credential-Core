import type { CredentialDefinition } from "../credential-definition.js";


export const BirthCertificateCredential:
  CredentialDefinition = {

  type: "BirthCertificateCredential",

  claims: {
    model: "string",
    serial_number: "string"
  },

  revocable: false,

  expires: false

};