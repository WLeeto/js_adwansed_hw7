import cleanPhoneNumber from "../js/phones";

describe('cleanPhoneNumber', () => {
    it('cleans and formats Russian phone numbers', () => {
        expect(cleanPhoneNumber('8 (927) 000-00-00')).toBe('+79270000000');
        expect(cleanPhoneNumber('+7 960 000 00 00')).toBe('+79600000000');
    });

    it('keeps international phone numbers unchanged', () => {
        expect(cleanPhoneNumber('+86 000 000 0000')).toBe('+860000000000');
        expect(cleanPhoneNumber('+860000000000')).toBe('+860000000000');
        expect(cleanPhoneNumber('33-93-54')).toBe('incorrect number');
        expect(cleanPhoneNumber('33-93-54-567-34-56')).toBe('incorrect number');
    });
});
