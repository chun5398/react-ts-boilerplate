'use strict';

const path = require('path');

const env = process.env.NODE_ENV || 'development';

module.exports = {
    mode: env,
    entry: {
        main: path.join(__dirname, '../src/app.tsx')
    },
    output: {
        filename: '[name].[hash:8].js',
        path: path.join(__dirname, '../dist'),
    }
}