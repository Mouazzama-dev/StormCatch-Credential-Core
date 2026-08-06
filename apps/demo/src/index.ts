import {
  CredentialLifecycleService,
  CredentialStatus
} from "@stormcatch/core";

import "dotenv/config";

import {
 createProvider
} from "./provider.js";

console.log(
  "Paradym key exists:",
  !!process.env.PARADYM_API_KEY
);

console.log(
  "USE_MOCK:",
  process.env.USE_MOCK
);



const provider =
  createProvider();


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

const presentation =
 await lifecycle.present({

   verifierDid:
   "did:web:gate-5",

   credentialTypes:[
     "PayloadCredential"
   ],

   claims:{
     payload_type:[
       "sc:medicine"
     ]
   }

 });


console.log(
 "Presentation:",
 presentation
);

const revoked =
 await lifecycle.revoke(
   issued
 );


console.log(
 "Revoked:",
 revoked
);

