console.log(1);

setTimeout(function foo() {
    console.log('foo');
}, 3500);

setTimeout(function boo() {
    console.log('boo');
}, 1000);

console.log(2);