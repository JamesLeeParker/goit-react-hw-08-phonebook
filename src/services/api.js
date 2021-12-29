const BASE_URL = "https://61c49e84f1af4a0017d996d1.mockapi.io/api/v1/contacts";

const fetchData = async (options = {}) => {
  const resolve = await fetch(BASE_URL);
  const res = await resolve.json();
  return res;
  //   return res.ok ? res.json : Promise.reject(new Error(res.statusText));
};

const getData = (options) => fetchData(options);

getData().then(console.log);

const saveItem = (item, options = {}) => {
  const finalOptions = {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  fetch(BASE_URL, finalOptions);
};

// const saveItem = (item, options = {}) => {
//   const finalOptions = {
//     method: "POST",
//     body: JSON.stringify(item),
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//     ...options,
//   };
//   return fetchData(finalOptions);
// };

// const deleteItem = (id, options = {}) =>
//   fetchData(`/${id}`, { method: "DELETE", ...options });

const deleteItem = (id) => {
  fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
};

export { getData, saveItem, deleteItem };
