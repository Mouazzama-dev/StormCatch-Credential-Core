import type { CredentialDefinition } from "./credential-definition.js";


export class CredentialRegistry {

  private definitions = new Map<
    string,
    CredentialDefinition
  >();


  register(
    definition: CredentialDefinition
  ): void {

    this.definitions.set(
      definition.type,
      definition
    );

  }


  get(
    type: string
  ): CredentialDefinition | undefined {

    return this.definitions.get(type);

  }


  exists(
    type: string
  ): boolean {

    return this.definitions.has(type);

  }

}