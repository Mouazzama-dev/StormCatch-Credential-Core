import {
  createMockParadymProvider,
  createParadymProvider
} from "@stormcatch/providers";


import {
  appConfig
} from "./config.js";



export function createProvider(){


  if(appConfig.useMock){

    return createMockParadymProvider();

  }


  return createParadymProvider(
    appConfig.paradym
  );

}