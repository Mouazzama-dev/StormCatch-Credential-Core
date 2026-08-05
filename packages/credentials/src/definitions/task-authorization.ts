import type { CredentialDefinition } from "../credential-definition.js";


export const TaskAuthorizationCredential:
  CredentialDefinition = {

  type: "TaskAuthorizationCredential",

  claims: {
    action: "string",
    scope: "string",
    facility_id: "string"
  },

  revocable: true,

  expires: true

};