'use strict';

const B = require('./B');
const C = require('./C')

class A {
    constructor() {
        this.b = B;
        this.c = C;
        this.msg = 'AFOO'
    }

    aFoo() {
        console.log('Running aFoo');
        return `${this.msg} ${this.b.bFoo()} ${this.c.cFoo()}`;
    }
}

module.exports = new A();