# Webpack Project

References:
- [Webpack Documentation](https://webpack.js.org/concepts/)


## Usage
1.	Recreate node_modules folder by running:
```bash
cd my-bootcamp/13_preprocessors/webpack-project
npm install
``` 


Install Webpack and the Webpack CLI as development dependencies by running the following command:
```bash 
npm install --save-dev webpack webpack-cli
```

Also, install the plugins we’re going to use in this project:
```bash
npm install --save-dev style-loader css-loader file-loader html-webpack-plugin
```

To verify the resulting output, run the build command in your Terminal with npm run build. 
Webpack will create the output files inside the dist folder. 
Open the index.html file within the dist folder to see the rendered output in your browser. 
Additionally, examine how Webpack minifies the code and handles JavaScript by inspecting the generated files:
```bash
npm run build
```