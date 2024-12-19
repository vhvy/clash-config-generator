export const addPropertyToProxies = (proxies: Proxie[], property: Partial<Proxie>) => {
  return proxies.map(proxie => {
    return {
      ...proxie,
      ...property
    }
  });
}