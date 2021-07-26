"use strict";

/**
 * The `test_data.json` contains an object array of "The Simpsons" characters and their catchphrase. This function
 * will add a new property `example` to each object that is a combining the `first_name`, `last_name`, and
 * `catchphrase` properties into a new sentence. The function should then only return the elements where
 * the last name is "Simpson".
 *
 * The new sentence should read like "Homer Simpson says Doh!".  See the `expected_output.json` file for the
 * expected results of this.
 *
 * @returns  {Object[]}
 */
module.exports = function test2() {
  const json = require("./test_data.json");
  let obj = JSON.parse(JSON.stringify(json));

  return obj
    .filter((ele) => ele.last_name === "Simpson")
    .map((ele) => ({
      ...ele,
      example: `${ele.first_name} ${ele.last_name} says ${ele.catchphrase}`,
    }));
};
