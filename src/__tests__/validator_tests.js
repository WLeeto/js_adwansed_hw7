import Validator from "../js/validator";

describe('Validator', () => {
    describe('validateUsername', () => {
        it('should return true for valid usernames', () => {
            expect(Validator.validateUsername('user123')).toBe(true);
            expect(Validator.validateUsername('john_doe')).toBe(true);
        });

        it('should return false for invalid usernames', () => {
            expect(Validator.validateUsername('1234user')).toBe(false);
            expect(Validator.validateUsername('_underscore_')).toBe(false);
            expect(Validator.validateUsername('_-,*_')).toBe(false);
        });
    });
});
