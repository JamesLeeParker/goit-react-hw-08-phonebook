const BASE_URL = "https://connections-api.herokuapp.com";

const getFetchAuthApi = async () => {
  const response = await fetch(BASE_URL);
  const res = response.json();
  return res;
};

const onRegisterUser = (user) => {
  const newUser = {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  fetch(`${BASE_URL}/users/signup`, newUser);
};

export { getFetchAuthApi, onRegisterUser };
