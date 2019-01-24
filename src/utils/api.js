import Tokens from 'Utils/tokens';

const token = Tokens.Tom;

export const fetchLabelsAsync = async () => {
    const projectId = "2188060";

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