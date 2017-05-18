module.exports = {
  entry: './app/app.jsx' ,//入口
  output: {
      path:__dirname,
      filename: './public/bundle.js'//生成一個bundle.js
  },
  resolve: {
      root:__dirname,//node js的變數
      alias: {
          Main: 'app/components/Main.jsx',
          Nav:  'app/components/Nav.jsx',
          Weather: 'app/components/Weather.jsx',
          WeatherForm:'app/components/WeatherForm.jsx',
          WeatherMessage: 'app/components/WeatherMessage.jsx',
          About:'app/components/About.jsx',
          Examples:'app/components/Examples.jsx',
          openWeatherMap: 'app/api/openWeatherMap.jsx'  
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
  },
  devtool: 'cheap-module-eval-source-map'//不用這個會因為翻譯成es5而變成幾萬行
};

