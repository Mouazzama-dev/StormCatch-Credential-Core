export interface CredentialDefinition {
  type: string;

  claims: Record<string, string>;

  revocable: boolean;

  expires: boolean;
}