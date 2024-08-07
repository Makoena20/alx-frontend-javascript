export default function loadBalancer(chinaDownload, USDownload) {
  // Return a promise that resolves with the value of the first promise to resolve
  return Promise.race([chinaDownload, USDownload]);
}

