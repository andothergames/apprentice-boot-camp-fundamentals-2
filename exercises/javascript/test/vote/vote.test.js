import { isEligibleToVote } from '../../main/vote/vote.js'
describe('isEligibleToVote', () => {
  test('isEligibleToVote returns boolean', () => {
    const input = 0;
    const actual = isEligibleToVote(input)
    expect(typeof actual).toBe("boolean");
  });
  test('isEligibleToVote returns true when given number over 18', () => {
    const input = 20;
    const actual = isEligibleToVote(input)
    expect(actual).toBe(true);
  });
  test('isEligibleToVote returns false when given number under 18', () => {
    const input = 16;
    const actual = isEligibleToVote(input)
    expect(actual).toBe(false);
  });
  test('isEligibleToVote returns true when given number is exactly 18', () => {
    const input = 18;
    const actual = isEligibleToVote(input)
    expect(actual).toBe(true);
  });
});