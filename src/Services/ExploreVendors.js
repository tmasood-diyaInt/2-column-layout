import { get, post,put, head } from ".";

async function getVendors(data) {
  const json = post(`/searchPackages`, data);
  return json;
}
async function getSystemConfig() {
  const json = get('/getSystemConfigurations');
  return json;
}

export const VendersAPI = {
  getVendors,
  getSystemConfig
};
