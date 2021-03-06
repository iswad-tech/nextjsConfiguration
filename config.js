import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const API = !publicRuntimeConfig.PRODUCTION
  ? publicRuntimeConfig.API_DEVELOPMENT
  : publicRuntimeConfig.API_PRODUCTION;
export const APP_NAME = publicRuntimeConfig.APP_NAME;
export const DOMAIN = !publicRuntimeConfig.PRODUCTION
  ? publicRuntimeConfig.DOMAIN_DEVELOPMENT
  : publicRuntimeConfig.DOMAIN_PRODUCTION;
export const FB_APP_ID = publicRuntimeConfig.FB_APP_ID;
export const GOOGLE_CLIENT_ID = !publicRuntimeConfig.PRODUCTION
  ? publicRuntimeConfig.GOOGLE_CLIENT_ID_DEVELOPMENT
  : publicRuntimeConfig.GOOGLE_CLIENT_ID_PRODUCTION;