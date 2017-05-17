module.exports = {
  entry: './app/components/app.jsx' ,//入口
  output: {
      path:__dirname,
      filename: './public/bundle.js'//生成一個bundle.js
  },
  resolve: {
      root:__dirname,//node js的變數
      alias: {
          Main: 'app/components/Main.jsx',
          Nav:  'app/components/Nav.jsx'
      },
      extensions:['', '.js', '.jsx']
  },
  module: {
      loaders: [
        {
             loader: 'babel-loader',
             query: {
                 presets: ['react','es2015','stage-0']
             },
             test: /\.jsx?$/,
             exclude:/(node_modules｜bower_components)/
          }
      ]
  }
};

