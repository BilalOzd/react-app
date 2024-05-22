const path = require('path'); // CommonJS formatında import işlemi
const HtmlWebpackPlugin = require('html-webpack-plugin');

//_dirname - node.js tarafında uygulama dizini
//module.exports CommonJS formatında module dışarı export edilmesi
 
module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    devServer: {
        port: 3001,
    },
    output: {
        filename: 'bundle.js', //js dönüşecek olan dosyanın ismi,uygulama bundle - .js'den çalışaacak
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
// yukarıdaki ayar ile SPA uygulama ana sayfa olarak index.html üzerinden çalışacağını
// HtmlWebPackPlugin ayarı ile anlıyor.