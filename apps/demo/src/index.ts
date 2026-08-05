import {
  CredentialLifecycleService,
  CredentialStatus
} from "@stormcatch/core";


import {
  createMockParadymProvider
} from "@stormcatch/providers";


const provider =
  createMockParadymProvider();


const lifecycle =
  new CredentialLifecycleService(
    provider
  );



const credential = {

  id:"cred-001",

  type:"PayloadCredential",

  issuerId:"did:web:pharmacy",

  subjectId:"did:web:robot-1",

  claims:{
    payload_type:"sc:medicine"
  },

  status:CredentialStatus.ACTIVE,

  issuedAt:new Date(),

  validFrom:new Date()

};



const issued =
 await lifecycle.issue(
   credential
 );


console.log(
 "Issued:",
 issued
);