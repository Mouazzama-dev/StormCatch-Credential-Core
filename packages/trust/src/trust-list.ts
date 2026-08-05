import type { TrustEntry } from "./trust-entry.js";


export interface TrustList {

  version: string;

  validUntil: Date;

  entries: TrustEntry[];

}