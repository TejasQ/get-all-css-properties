export const getAllCSSProperties = () => {
  return Object.keys(document.createElement("div").style).map(prop =>
    prop
      .replace(/[\w]([A-Z])/g, match => match[0] + "-" + match[1])
      .toLowerCase()
  );
};
