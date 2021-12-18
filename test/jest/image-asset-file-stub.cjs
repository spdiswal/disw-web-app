const path = require("path")

// Read more:
// https://jestjs.io/docs/next/code-transformation#transforming-images-to-their-path
//
module.exports = {
    process(src, filename, config, options) {
        return "module.exports = " + JSON.stringify(path.basename(filename)) + ";"
    },
}
