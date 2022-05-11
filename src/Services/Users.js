import { get, post, put, head } from ".";


async function fetchUser() {
  const json = get(`/users/1`);
  return json;
}

async function validateOrder(data, token) {
  const json = post(`/orderValidation`, data, { 'Authorization': 'Bearer ' + token });
  return json;
}

async function getMyOrders(idToken) {
  const json = post('/myOrders', {}, { 'Authorization': 'Bearer ' + idToken })
  return json
}

async function getOrderDetails(idToken, orderId) {
  const json = get(`/getOrderDetails?orderId=${orderId}`, {}, { 'Authorization': 'Bearer ' + idToken })
  return json
}
export const UsersAPI = {
  fetchUser,
  validateOrder,
  getMyOrders,
  getOrderDetails
  
};
