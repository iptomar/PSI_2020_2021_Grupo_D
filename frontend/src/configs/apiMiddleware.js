const serverURL = process.env.REACT_APP_NODE_URI;

export const request = (method, route, params) => {
  console.log("s: "+serverURL)
  let currentUser = sessionStorage.getItem("user");
  return new Promise((resolve, reject) => {
    let serviceUrl = serverURL + route;

    fetch(serviceUrl, {
      method,
      headers: {
        ...(params &&
          params.jsonData && {
            "Content-Type": "application/json;charset=utf-8",
          }),
        ...(currentUser && { Authorization: JSON.parse(currentUser).token }),
      },
      ...(params && {
        ...(params.jsonData && { body: JSON.stringify(params.jsonData) }),
        ...(params.formData && { body: params.formData }),
      }),
    })
      .then((res) => parseResponse(res))
      .then((data) => resolve(data))
      .catch((err) => {
        console.error(`api middle error ${method} ${route}:\n ${err}`);
        reject(err);
      });
  });
};

const parseResponse = (response) =>
  new Promise((resolve, reject) => {
    if (response.ok) {
      resolve(response.json());
    } else {
      console.error("Parse response reject");
      reject(response.text());
    }
  });
