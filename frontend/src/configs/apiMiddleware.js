const serverURL = "http://localhost:3001";

export const request = (method, route, params) => {
  return new Promise((resolve, reject) => {
    let serviceUrl = serverURL + route;

    fetch(serviceUrl, {
      method,
      headers: {
        ...(params &&
          params.jsonData && { "Content-Type": "application/json" }),
      },
      ...(params && {
        ...(params.jsonData && { body: JSON.stringify(params.jsonData) }),
      }),
    })
      .then((res) => parseResponse(res))
      .then((data) => resolve(data))
      .catch((err) => {
        console.error(`api middle error ${method} ${route}: ${err.message}`);
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
