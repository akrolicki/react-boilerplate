import { add } from './add';

describe('add', () => {
  it('should correctly add two numbers', () => {
    expect(add(2, 3)).toEqual(5);
  });
  it('should correctly add two numbers even if number is negative', () => {
    expect(add(2, -3)).toEqual(111);
  });
});
