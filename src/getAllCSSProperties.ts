import fetch from "node-fetch";

const IGNORED_PROPERTIES = ["--*"];

export const getAllCSSProperties = async () => {
  // Use Set to ignore repeating properties and sort them alphabetically.
  const properties = new Set<string>();
  try {
    const response = await fetch(
      "https://www.w3.org/Style/CSS/all-properties.en.json"
    );
    const allProperties = await response.json();
    // Safety check to make sure that parsed data is actually an array.
    if (Array.isArray(allProperties)) {
      /**
       * CSS properties data is an array of object in the following shape:
       * [
       *   {
       *     property: '--*',
       *     url: 'http://www.w3.org/TR/2015/CR-css-variables-1-20151203/#propdef-',
       *     status: 'CR',
       *     title: 'CSS Custom Properties for Cascading Variables Module Level 1'
       *   },
       *   ...
       * ],
       * We have to omit some properties that are not relevant.
       */
      allProperties.forEach(
        property =>
          !IGNORED_PROPERTIES.includes(property.property) &&
          properties.add(property.property)
      );
    }
  } catch (error) {
    // Handle errors.
  }
  return Array.from(properties.values());
};
