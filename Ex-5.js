console.log(1);

setTimeout(function foo() {
    console.log('foo');
}, 0);

Promise.resolve()
    .then(function boo() {
        console.log('boo');
    });

console.log(2);