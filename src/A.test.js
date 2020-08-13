const A = require('./A');
const B = require('./B');
const C = require('./C');

jest.mock('./B', () => {
    return {
        bFoo: jest.fn(),
    }
});

jest.mock('./C', () => {
    return {
        cFoo: jest.fn(),
    }
});

describe('A', () => {
    it('afoo', () => {
        bSpy = jest.spyOn(B, 'bFoo').mockImplementation(() => 'bfoo');
        cSpy = jest.spyOn(C, 'cFoo').mockImplementation(() => 'cfoo');
        expect(A.aFoo()).toEqual('AFOO bfoo cfoo');
        bSpy.mockClear();
        cSpy.mockClear();
    });
});