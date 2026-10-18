const loadPyodide = require('pyodide')
console.log("starting..")
async function main() {
    const pyodide = "lol"
    let output = loadPyodide.runPython(`
print("Hello world! Pyodide loaded!")

    `);
    console.log(output);
}

main();