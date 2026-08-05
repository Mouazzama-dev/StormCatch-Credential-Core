import type { CredentialDefinition } from "../credential-definition.js";


export const StateAttestationCredential:
  CredentialDefinition = {

  type: "StateAttestationCredential",

  claims: {
    state: "string",
    asserted_by: "string"
  },

  revocable: true,

  expires: true

};