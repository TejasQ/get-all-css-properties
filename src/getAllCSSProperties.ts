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
      const accumulator: Set<string> = new Set(); // let's use a Set to avoid duplicates HOMIE
      let match: RegExpExecArray | null;
      while ((match = searchRegexp.exec(text))) {
        accumulator.add(match[2]);
      }
      return Array.from(accumulator)
        .sort()
        .slice(2);
    });
};
