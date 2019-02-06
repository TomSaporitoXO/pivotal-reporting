const projectId = "2188060";

/**
 *
 * @param {string} token
 * @desc - These values are dynamic and if we want to filter by them, we must first retrieve the most up to date list of them
 */
export const fetchLabelsAsync = async token => {
  // compose request URL
  const url = `https://www.pivotaltracker.com/services/v5/projects/${projectId}/labels`;

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

/**
 *
 * @param {string} token
 * @desc - These values are dynamic and if we want to filter by them, we must first retrieve the most up to date list of them
 */
export const fetchEpicsAsync = async token => {
  // compose request URL
  const url = `https://www.pivotaltracker.com/services/v5/projects/${projectId}/epics`;

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

/**
 *
 * @param {string} token
 * @param {number} offset
 * @desc gets all of the stories in the specified project
 */
export const fetchStoriesAsync = async (token, offset) => {
  // compose request URL
  const url = `https://www.pivotaltracker.com/services/v5/projects/${projectId}/stories?fields=id,created_at,accepted_at,estimate,story_type,current_state,name,url,labels&offset=${offset}`;

  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      // "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "X-TrackerToken": token,
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer" // no-referrer, *client
  });

  const data = await response.json();

  return data;
};
