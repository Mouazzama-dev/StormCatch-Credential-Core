export interface ParadymConfig {

  baseUrl: string;

  apiKey: string;

  tenantId?: string;

  walletId: string;

  templates: ParadymCredentialTemplates;


}

export interface ParadymCredentialTemplates {

  [credentialType:string]: {

    templateId:string;

    format:string;

  };

}