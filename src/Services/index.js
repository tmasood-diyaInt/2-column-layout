

const API_ROOT = process.env.REACT_APP_API_URL;

function apiUrl(url, method ="") {
  return API_ROOT + url;
}

function jsonToUrlEncode(json) {
  if (Object.keys(json).length === 0) {
    return "";
  }
  return (
    "?" +
    Object.keys(json)
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(json[k]))
      .join("&")
  );
}

export async function fetchFAQ() {
  const json = await get(`/faqs`)
  return json
}

export async function doFetch(method = "GET", url, methodOptions = {}) {
  const options = {
    ...methodOptions,
    method,
    mode: 'cors',
    headers: {
      ...methodOptions.headers,
    },
  };

  return filterResponseOrError(url, options,method);
}
function filterResponseOrError(url, options, method) {
  let response;
  let request = new Promise(async (resolve, reject) => {
    try {
      response = await fetch(apiUrl(url, method), options);
      
      if (response.status === 500) {
        // ErrorHandler.handleError(response.status, null);
        reject({
          error: "Something Went Wrong",
          statusCode: response.status,
        });
      } else if (response.status === 401 || response.status ===404) {
        const json = await response.json();
        // console.log('404', json)
        resolve(json,
        );
      } else if (response.status === 412 || response.status === 400 ) {
        const resp = await response.json();
        resolve(
          resp
        );
      } else if (
        response.status >= 400 &&
        response.status !== 401 &&
        response.status !== 500
      ) {
        const json = await response.json();
        // ErrorHandler.handleError(response.status, json.Body);
        reject(json.body);
      } else {
        if (method=== 'HEAD'){
            resolve({
            response: response?.headers?.map?.["last-update-date"] ?? null,
            statusCode: response.status,
          });
        }
        else {
          const resp = await response.json();
          resolve(           resp            
      );
        }
      }
    } catch (error) {
      resolve(
        response && response.status,
      );
    }
  }).catch((e) => {
    return {
      error: "connection error",
    };
  });
  return request;
}
async function getAuthToken() {
  var token = await localStorage.getAccessToken();
  if (token !== null && token !== "undefined") {
    // console.log("INSIDE TOKEN LOGIC IN INDEX FILE", token);
    return { Authorization: `Token ` + token };
  }
}


export function post(url, json, headers) {
  const options = {
    body: JSON.stringify(json),
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
  };
  return doFetch("POST", url, options);
}

export function del(url, json, headers) {
  const options = {
    body: JSON.stringify(json),
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
  };
  return doFetch("DELETE", url, options);
}

export function patch(url, json, headers, param = "") {
  const options = {
    body: JSON.stringify(json),
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
  };
  return doFetch("PATCH", url + param, options);
}

export function get(url, json = {}, headers = {}) {
  return doFetch("GET", url + jsonToUrlEncode(json), {
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
  });
}

export function put(url, json, headers) {
  const options = {
    body: JSON.stringify(json),
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
  };
  return doFetch("PUT", url, options);
}

export function upload(methodOption, url, data, headers) {
  const options = {
    headers: {
      ...headers,
      "Content-Type": "multipart/form-data",
    },
  };
  options.body = new FormData();
  for (let key in data) {
    options.body.append(key, data[key]);
  }
  return doFetch(methodOption, url, options);
}

export function head(url, json = {}, headers = {}) {
  return doFetch("HEAD", url + jsonToUrlEncode(json), {
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
  });
}