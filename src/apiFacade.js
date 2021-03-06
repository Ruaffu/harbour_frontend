import URL from "./settings";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() })
  }
  return res.json();
}

function apiFacade() {
  /* Insert utility-methods from a later step (d) here (REMEMBER to uncomment in the returned object when you do)*/
  const setToken = (token) => {
    localStorage.setItem('jwtToken', token)
  }
  const getToken = () => {
    return localStorage.getItem('jwtToken')
  }
  const loggedIn = () => {
    const loggedIn = getToken() != null;
    return loggedIn;
  }
  const logout = () => {
    localStorage.removeItem("jwtToken");
  }


  const login = (user, password) => {
    const options = makeOptions("POST", true, { username: user, password: password });
    return fetch(URL + "/api/login", options)
      .then(handleHttpErrors)
      .then(res => { setToken(res.token) })
  }
  const fetchUserInfo = () => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL + "/api/info/userinfo", options).then(handleHttpErrors);
  }

  const fetchCat = () => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL + "/api/cat/cat", options).then(handleHttpErrors);
  }

  const fetchOwner = () => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL + "/api/owner/all", options).then(handleHttpErrors);
  }

  const getBoatsByHarbourId = (id) => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL + `/api/harbour/${id}/`, options).then(handleHttpErrors);
  }

  const connectBoat = (boatID, harbourID) => {
    const options = makeOptions("PUT", true); //True add's the token
    return fetch(URL + `/api/boats/${boatID}/connect/${harbourID}`, options)
      .then(handleHttpErrors)
      .then(res => { setToken(res.token) })
  }

  const updateBoat = (boatID,boatInfo) => {
    const options = makeOptions("PUT", true, boatInfo); //True add's the token
    console.table(boatInfo);
    return fetch(URL + `/api/boats/${boatID.id}/update`, options)
      .then(handleHttpErrors)
      .then(res => { setToken(res.token) })
  }

  const deleteBoat = (id) => {
    const options = makeOptions("DELETE", true); //True add's the token
    return fetch(URL + `/api/boats/${id.boatID}/delete`, options).then(handleHttpErrors);
  }

  const create = (username, password) => {
    const options = makeOptions("POST", true, { userName: username, userPass: password }); //True add's the token
    console.log(username + " " + password);
    return fetch(URL + "/api/info/newuser", options)
      .then(handleHttpErrors)
      .then(res => { setToken(res.token) })
  }

  const makeOptions = (method, addToken, body) => {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        'Accept': 'application/json',
      }
    }
    if (addToken && loggedIn()) {
      opts.headers["x-access-token"] = getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  }
  return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    fetchUserInfo,
    fetchCat,
    fetchOwner,
    create,
    getBoatsByHarbourId,
    connectBoat,
    updateBoat,
    deleteBoat,
  }
}
const facade = apiFacade();
export default facade;
