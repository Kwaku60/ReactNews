var path = require("path");

module.exports = {

  //the entry point or start of app
  entry: "./app/app.js",

  // The plain compiled JavaScript will be output into this file
  output: {
    path:path.resolve(__dirname,"public"),
    filename:"bundle.js"
  },

  //  the transformations 
  module: {
    loaders: [
      {
        // Only working w/ files in a .js or .jsx extension
        test: /\.jsx?$/,
        // Webpack will only process files in our app folder. (avoid processing node modules)
        include: /app/,
        loader: "babel",
        query: {
          //the specific transformation.
          presets: ["react", "es2015"]
        }
      }
    ]
  },
  //  for debugging react code in chrome dev tools. Errors will have lines and file name reff.
  // Without this, console says all errors are from bundle.js
  devtool: "eval-source-map"
};
