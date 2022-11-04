const path = require("path");

module.exports = {
    devtool: "hidden-source-map",
    entry: {
        index: "./src/index.js",
        initialize: "./src/initialize.js",
        app: "./src/app.js",
        game: "./src/game.js",
    },
    output: {
        path: path.resolve(__dirname, "assets/js"),
        filename: "[name].js",
    },
    resolve: {
        extensions: [
            '.js',
        ],
    },
    devServer: {
        contentBase: path.resolve(__dirname, "assets/js"),
    },
    cache: true,
};
