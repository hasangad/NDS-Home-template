const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production', // Use 'development' for unminified builds

    entry: {
        main: './src/js/main.js',
        vendor: './src/js/plugins/vendor.js',
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].min.js', // [name] will be replaced by 'main' or 'vendor'
        clean: true, // Cleans the output directory before every build
    },

    module: {
        rules: [
            // SCSS Loader
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader', // For autoprefixing
                    'sass-loader',
                ],
            },

            // JavaScript Loader
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },

            // Image Loader
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext]',
                },
            },

            // Font Loader
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]',
                },
            },
        ],
    },

    plugins: [
        // Extract CSS into separate files
        new MiniCssExtractPlugin({
            filename: 'css/[name].min.css',
        }),

        // Generate HTML file
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),

        // Copy static assets (e.g., images, fonts)
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/images', to: 'assets/images' },
                { from: 'src/fonts', to: 'assets/fonts' },
            ],
        }),
    ],

    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(), // Minify CSS
            new TerserPlugin(), // Minify JavaScript
        ],
    },

    devtool: 'source-map', // Optional: generates source maps for debugging

    resolve: {
        extensions: ['.js', '.scss'],
    },
};