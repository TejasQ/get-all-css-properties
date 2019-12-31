import fetch from "node-fetch";

export const getAllCSSProperties = () => {
  const searchRegexp = new RegExp('<li><a href="/css/(.*)">(.*)</a></li>', "igm");
  return fetch("https://cors-anywhere.herokuapp.com/https://www.quackit.com/css/properties/", {
    headers: {
      origin: "http://127.0.0.1",
    },
  })
    .then(r => r.text())
    .then(text => {
      // ES2020 and matchAll FTW!
      const results = Array.from(text.matchAll(searchRegexp), m => m[2]);
      // let's use a Set to avoid duplicates HOMIE
      const uniqueResults = Array.from(new Set(results));
      return uniqueResults.sort().slice(2);
    });
};
