import { isSuccess } from '../';

const type = 'ACTION_TYPE';

describe('isSuccess', () => {
  it('returns true if status is "success" or undefined', () => {
    expect(isSuccess({ type })).to.be.true;
    expect(isSuccess({ type, status: 'success' })).to.be.true;
    expect(isSuccess({ type, status: 'error' })).to.be.false;
  });

  it('returns false if status is defined but not "success"', () => {
    expect(isSuccess({ type, status: 'pending' })).to.be.false;
  });
});
