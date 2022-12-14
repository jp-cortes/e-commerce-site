const Path = require('path');//indicates the pth where  we are working
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // entrypoint of the app
    entry: './src/index.js',
    output: {//where is going to live the project ones is done
        path: Path.resolve(__dirname, 'dist'),//as a convention use this name dist comming from distribution
        filename: 'bundle.js',//name of the package that will be created
        publicPath: '/',

    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {//explaining the extensions of the files i want it to read
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,//files i want  to exclude
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(css|scss)$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer: {
        static: {
            directory:Path.join(__dirname, 'dist') 
        }, 
        compress: true,
        port: 3005,
        historyApiFallback: true,
    }

}