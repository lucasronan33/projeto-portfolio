const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve(
        __dirname__,
        "frontend",
        "assets",
        "js",
        "lazyloading.js"
    ),
    output: {
        path: path.resolve("./", "public", "assets", "js"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js/,
                use: {
                    options: {
                        presets: "@babel/env",
                        
                    }
                }
            }
        ]
    },
    devtool: "source-map"
};
