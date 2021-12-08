import { getFiles, setupPrecaching, setupRouting } from 'preact-cli/sw/';s

setupRouting();
setupPrecaching(getFiles());