import {multiply} from './index.js';

describe('test multiply', () => {
    it ('result to equal 0', () => {
        const result = multiply(1, 0);
        expect(result).toBe(0);
    }),
    it ('result to equal 1', () => {
        const result = multiply(1, 1);
        expect(result).toBe(1);
    }),
    it ('result to equal 2', () => {
         const result = multiply(1, 2);
        expect(result).toBe(2);
    });  
});

describe('test multiply 2', () => {
    it ('result to equal 0', () => {
        const result = multiply(1, 0);
        expect(result).toBe(0);
    }),
    xit ('result to equal 1', () => {
        const result = multiply(1, 1);
        expect(result).toBe(1);
    }),
    it ('result to equal 2', () => {
         const result = multiply(1, 2);
        expect(result).toBe(2);
    });  
});
