export interface TrustEntry {

  issuerDid: string;

  credentialType: string;

  allowedValues?: Record<
    string,
    string[]
  >;

}