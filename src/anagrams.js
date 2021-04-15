// Write a f(n) that accepts two strings, and tells you where those two are anagrams of each other.
// An anagram is when two strings have exact same letters in them, and in the exact same quantities, but in different order.

import { getLetterCount } from './letter-count';

export const isAnagram = (a, b) => {
    let result = null;
    const [aLetterCount, bLetterCount] = [getLetterCount(a), getLetterCount(b)];
    if (Object.keys(aLetterCount).every(key => key in bLetterCount) && Object.keys(bLetterCount).every(key => key in aLetterCount)) {
        result = Object.entries(aLetterCount).every(kvp => {
            const [k, v] = kvp; // kvp is a key value pair as an array.
            return bLetterCount[k] === v; // compare the value of a against the value of b.
        });
    } else {
        result = false;
    }
    
    return result;
};