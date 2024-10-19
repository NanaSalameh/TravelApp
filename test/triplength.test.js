import {
    TripLength 
} 
from "../src/client/script/triplength.js";
describe('TripLength', () => {
    test('calculates the correct number of days between two dates', () => {
        const startDate = '2024-09-01';
        const endDate = '2024-09-10';
        const result = TripLength(startDate, endDate);
        expect(result).toBe(9);
    });

    test('returns 0 when startDate and endDate are the same', () => {
        const startDate = '2024-09-01';
        const endDate = '2024-09-01';
        const result = TripLength(startDate, endDate);
        expect(result).toBe(0);
    });

    test('handles leap years correctly', () => {
        const startDate = '2024-02-28';
        const endDate = '2024-03-01';
        const result = TripLength(startDate, endDate);
        expect(result).toBe(2);
    });

    test('handles different months correctly', () => {
        const startDate = '2024-08-31';
        const endDate = '2024-09-01';
        const result = TripLength(startDate, endDate);
        expect(result).toBe(1);
    });
});