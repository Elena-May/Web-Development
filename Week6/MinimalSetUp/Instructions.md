npm init -y

    package.json
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "webpack-dev-server --config ./webpack.config.js --mode development"
    },
mkdir dist 
cd dist
touch index.html
cd ..
npm install --save-dev webpack webpack-dev-server webpack-cli
touch webpack.config.js

    webpack.config.js 

    module.exports = {
        entry: './src/index.js',
        output: {
            path: __dirname + '/dist',
            publicPath: '/',
            filename: 'bundle.js'
        },
        devServer: {
            contentBase: './dist'
        }
    };


mkdir src
cd src

npm install --save-dev @babel/core @babel/preset-env
npm install --save-dev babel-loader
npm install --save-dev @babel/preset-react

    package.json 
        "babel": {
            "presets": [
            "@babel/preset-env",
            "@babel/preset-react"
            ]
        },


    webpack.config.js
    module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
            ]
    },
    resolve: {
    extensions: ['*', '.js', '.jsx']
    },

npm install --save react react-dom