const childp = require('child_process');


console.log("aaaaaaaa 0");
try {
    const out = childp.execSync('ls')
    console.log(out.toString());
} catch(e) {
    console.log(e);
}

console.log("aaaaaaaa 1");
try {
    childp.execSync('hoge')
} catch(e) {
    console.dir(e);
}


console.log("aaaaaaaa 2");
childp.exec('ls', (err, stdout, stderr) => {
    console.log(err);
    console.log(stdout);
});0
