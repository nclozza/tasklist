import API from "../configuration/API";

const taskRequests = {
  getTasks: (N) => {
    return fetch(`${API.baseURL}?N=${N}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Something wrong happened.");
          return null;
        }
      })
      .catch((error) => {
        console.log("Something wrong happened: " + error.message);
        return null;
      });
  },

  markTaskDone: (uuid) => {
    return fetch(`${API.baseURL}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uuid,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          console.log("Something wrong happened.");
          return null;
        }
      })
      .catch((error) => {
        console.log("Something wrong happened: " + error.message);
        return null;
      });
  },
};

export default taskRequests;
