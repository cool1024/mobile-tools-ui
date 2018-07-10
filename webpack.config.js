var webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
})

module.exports = {
    entry: {
        index: __dirname + '/src/index.ts',
        card: __dirname + '/src/pages/card/card.ts',
        image: __dirname + '/src/pages/image/image.ts',
        button: __dirname + '/src/pages/button/button.ts',
        footbar: __dirname + '/src/pages/footbar/footbar.ts',
        alert: __dirname + '/src/pages/alert/alert.ts',
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "sass-loader",
                        }
                    ],
                    fallback: "style-loader"
                })
            },
            { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ },
        ]
    },
    plugins: [
        extractSass,
        new UglifyJsPlugin(),
        new CopyWebpackPlugin([{ from: 'src/pages/*/*.html', to: '[name].html', flatten: true }]),
    ],
    externals: {
        jquery: 'jQuery'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: [".tsx", ".ts", ".js"]
    }
}