const projectId = "2188060";

export const fetchLabelsAsync = async (token) => {

    // compose request URL
    const url = `https://www.pivotaltracker.com/services/v5/projects/${projectId}/labels`

    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "X-TrackerToken": token
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer" // no-referrer, *client
    });

    const data = await response.json();

    return data;
  };


  export const fetchEpicsAsync = async (token) => {

    // compose request URL
    const url = `https://www.pivotaltracker.com/services/v5/projects/${projectId}/epics`

    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "X-TrackerToken": token
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer" // no-referrer, *client
    });

    const data = await response.json();

    return data;
  };

export const fetchStoriesAsync = async (token) => {

    // compose request URL
    const url = `https://www.pivotaltracker.com/services/v5/projects/${projectId}/stories`

    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "X-TrackerToken": token
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer" // no-referrer, *client
    });

    const data = await response.json();

    return data;
  };