let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/admin.js', 'public/js')
   .sass('resources/assets/sass/admin.scss', 'public/css')
   .js('resources/assets/js/home.js', 'public/js')
   .sass('resources/assets/sass/home.scss', 'public/css');

mix.webpackConfig({
    output: {
        publicPath: "/",
        chunkFilename: 'js/lazy/[name].js?[chunkhash]'
    },
})