import { ActorType } from "./actor.js";
import type { Actor } from "./actor.js";


export interface Machine extends Actor {
  type: ActorType.MACHINE;

  walletId?: string;
}