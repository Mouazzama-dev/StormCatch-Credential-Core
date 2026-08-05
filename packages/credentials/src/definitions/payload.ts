import type { CredentialDefinition } from "../credential-definition.js";


export const PayloadCredential:
  CredentialDefinition = {

  type: "PayloadCredential",

  claims: {
    payload_ref: "string",
    payload_type: "string",
    destination: "string",
    origin: "string"
  },

  revocable: true,

  expires: true

};