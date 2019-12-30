#!/usr/bin/env node
import { getAllCSSProperties } from "./getAllCSSProperties";

console.log("Getting all CSS properties...");
getAllCSSProperties().then(cssProperties => {
  console.clear();
  console.log("- " + cssProperties.join("\n- "));
  console.log(`
There you go!


Made with ❤️  by 
    https://twitter.com/tejaskumar_ 
        for
            https://twitter.com/tlakomy`);
});
