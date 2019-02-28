const validator = require('validator');

it('should work with validator sub-project-2 dependency', () => {
  expect(validator.isEmail('foo@bar.com')).toBe(true);
})