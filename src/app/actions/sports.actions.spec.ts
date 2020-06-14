import * as fromSports from './sports.actions';

describe('loadSportss', () => {
  it('should return an action', () => {
    expect(fromSports.loadSportss().type).toBe('[Sports] Load Sportss');
  });
});
