const stringLength = require('./stringLength.js');

test('string length at least 1 character', () => {
  expect(stringLength('yesuffenta')).toBeGreaterThanOrEqual(1);
  expect(stringLength('yesuffenta')).toBeLessThanOrEqual(10);
});