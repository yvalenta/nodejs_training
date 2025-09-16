import { setUnion } from './map.js';

describe('Given a group of numbers from 1 to 15', () => {
    describe('When I want to join another group of numbers from 10-20', () => {
        it('Then when I setUnion on both groups I expect to get a set with numbers from 1-20', () => {
            const result = setUnion(
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
            );
            
            const expected = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
            expect(new Set(Array.from(result))).toEqual(new Set(Array.from(expected)));
        });
    });
});
