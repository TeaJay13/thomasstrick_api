// helper for validation using the npm package validatorjs

const Validator = require('validatorjs');
const validator = (body, rules, customMessages, callback) => {
 const validation = new Validator(body, rules, customMessages);
 validation.passes(() => callback(null, true));
 validation.fails(() => callback(validation.errors, false));
}