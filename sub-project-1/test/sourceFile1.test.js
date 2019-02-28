const moment = require('moment');

it('should work with moment sub-project-1 dependency', () => {
  expect(moment()
  .utc()
  .add(7, 'days')
  .subtract(1, 'months')
  .year(2009)
  .hours(0)
  .minutes(0)
  .seconds(0)
  .millisecond(0).toString()).toBe('Sat Feb 07 2009 00:00:00 GMT+0000')
})