
var path = require("path");


module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'out'),
        filename: 'reallog.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]

    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        contentBase: path.join(__dirname, 'out'),
        compress: true,
        port: 9000
    }
};

