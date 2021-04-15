import { expect } from 'chai';
import { isAnagram } from './anagrams';

describe('isAnagram - basic functionality', () => {
    it('returns a boolean when passed two strings as parameters', () => {
        expect(isAnagram('listen', 'silent')).to.be.a('boolean');
    });

    it('returns the correct result when any of the strings DO NOT contain the same exact letters', () => {
        const expected = false;
        const actual = isAnagram('beluw', 'below');
        expect(actual).to.equal(expected);
    });

    it('returns the correct result when any of the strings DO contain the same exact letters', () => {
        const expected = true;
        const actual = isAnagram('aaa', 'aaa');
        expect(actual).to.equal(expected);
    });

    it('returns the correct result when both strings having the same quantity of each letter.', () => {
        const expected = true;
        const actual = isAnagram('elbow', 'below');
        expect(actual).to.equal(expected);
    });

    it('returns the correct result when both strings DO NOT HAVE the same quantity of each letter.', () => {
        const expected = false;
        const actual = isAnagram('elbow', 'beloww');
        expect(actual).to.equal(expected);
    });

    it('returns the correct result when the strings are "listen" and "silent"', () => {
        const expected = true;
        const actual = isAnagram('listen', 'silent');
        expect(actual).to.equal(expected);
    });

    it('returns the correct result when the strings are "listens" and "silent"', () => {
        const expected = false;
        const actual = isAnagram('listens', 'silent');
        expect(actual).to.equal(expected);
    });

    it('returns the correct result when the strings are "aaabbb" and "bababa"', () => {
        const expected = true;
        const actual = isAnagram('aaabbb', 'bababa');
        expect(actual).to.equal(expected);
    });

    it('returns the correct result when the strings are "aaabbb" and "ccccbababaaababa"', () => {
        const expected = false;
        const actual = isAnagram('aaabbb', 'ccccbababaaababa');
        expect(actual).to.equal(expected);
    });
});