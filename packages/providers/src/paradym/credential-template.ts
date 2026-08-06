import type {
  ParadymCredentialTemplates
} from "./config.js";


export function getCredentialTemplate(
  credentialType: string,
  templates: ParadymCredentialTemplates
) {


  const template =
    templates[credentialType];


  if (!template) {

    throw new Error(
      `No Paradym template configured for ${credentialType}`
    );

  }


  return template;

}