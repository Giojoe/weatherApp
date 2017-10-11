console.log('Start App');

setTimeout(() => {
    console.log('Inside of callback');
},2500);

setTimeout(() => {
    console.log('Second setTimeout');
}, 0)

console.log('Finishing up');
