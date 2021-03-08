const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = env => {
  const isDev = env === 'dev'
  const modules = {
    js: {
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'ts-loader',
        },
      ],
    },
    stylus: {
      test: /\.scss$/,
      use: [
        { loader: 'style-loader' }, // to inject the result into the DOM as a style block
        { loader: 'css-modules-typescript-loader' }, // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
        { loader: 'css-loader', options: { modules: true } }, // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
        { loader: 'sass-loader' }, // to convert SASS to CSS
        // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
      ],
    },
    stylusIsomorph: {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader, //1
        {
          loader: 'css-loader', //2
          options: {
            import: false,
            modules: true,
          },
        },
        'sass-loader', //3
      ],
    },
    css: {
      test: /\.scss/,
      use: [
        MiniCssExtractPlugin.loader,
        // 'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
        'sass-loader',
      ],
    }
  }

  const resolve = {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      App: path.resolve(__dirname, 'src/App/'),
      Pages: path.resolve(__dirname, 'src/Pages/'),
    },
  }

  return {
    modules,
    resolve,
  }
}
