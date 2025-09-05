const path = require("path");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "frontend", "assets", "js", "lazyLoading"),

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
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    devtool: "source-map"
};
