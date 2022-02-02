console.log(1);

setTimeout(function foo() {
    console.log('foo');
}, 6500);

setTimeout(function boo() {
    console.log('boo');
}, 2500);

setTimeout(function baz() {
    console.log('baz');
}, 0);

for (const value of ['A','B']) {
    console.log(value);
}

function two() {
    console.log(2);
}

two();