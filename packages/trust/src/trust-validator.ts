import type { TrustList } from "./trust-list.js";
import type { TrustEntry } from "./trust-entry.js";


export interface TrustValidationInput {

  issuerDid: string;

  credentialType: string;

  values?: Record<string, string>;

}


export function validateTrust(
  trustList: TrustList,
  input: TrustValidationInput,
  now: Date = new Date()
): boolean {


  // Trust list expiry check

  if (now > trustList.validUntil) {
    return false;
  }


  const entry = findTrustEntry(
    trustList,
    input
  );


  if (!entry) {
    return false;
  }


  return validateValues(
    entry,
    input.values
  );
}



function findTrustEntry(
  trustList: TrustList,
  input: TrustValidationInput
): TrustEntry | undefined {


  return trustList.entries.find(
    entry =>
      entry.issuerDid === input.issuerDid &&
      entry.credentialType === input.credentialType
  );

}



function validateValues(
  entry: TrustEntry,
  values?: Record<string,string>
): boolean {


  if (!entry.allowedValues || !values) {
    return true;
  }


  return Object.entries(
    entry.allowedValues
  )
  .every(([key, allowed]) => {

    const actual = values[key];

    return actual !== undefined &&
           allowed.includes(actual);

  });

}