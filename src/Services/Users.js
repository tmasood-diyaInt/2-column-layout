import { get, post, put, head } from ".";


async function fetchUser() {
  const json = get(`/users/1`);
  return json;
}


export const UsersAPI = {
  fetchUser,
}
