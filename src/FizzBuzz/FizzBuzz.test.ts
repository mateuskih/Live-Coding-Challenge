// Multiplos de 3 return fizz
// Multiplos de 5 return buzz
// Multiplo de 3 e 5 return fizzbuzz
// outros return num

import { fizzBuzz } from "./FizzBuzz";


describe('FizzBuzz', () => {
    test('Return "Fizz for multiples of 3"', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
        expect(fizzBuzz(6)).toBe('Fizz');
        expect(fizzBuzz(12)).toBe('Fizz');
    });

    test('Return "Buzz for multiples of 5"', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
        expect(fizzBuzz(10)).toBe('Buzz');
        expect(fizzBuzz(10)).toBe('Buzz');
    });

    test('Return "FizzBuzz for multiples of both 3 and 5"', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
        expect(fizzBuzz(30)).toBe('FizzBuzz');
        expect(fizzBuzz(45)).toBe('FizzBuzz');
    });

    test('Return the number itself for other numbers"', () => {
        expect(fizzBuzz(1)).toBe(1);
        expect(fizzBuzz(2)).toBe(2);
        expect(fizzBuzz(4)).toBe(4);
    });
});