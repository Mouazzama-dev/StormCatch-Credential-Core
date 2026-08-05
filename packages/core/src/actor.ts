export interface Actor {
  id: string;

  did: string;

  name?: string;

  type: ActorType;
}


export enum ActorType {
  ORGANIZATION = "organization",
  MACHINE = "machine"
}