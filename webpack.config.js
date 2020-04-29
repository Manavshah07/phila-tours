const path = require('path');
const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
];
module.exports = {
    entry: './app/assets/scripts/app.js',
    output: {
        filename: "app.bundled.js",
        path:path.resolve(__dirname, "app"),
    },
    devServer: {


        before: function (app, server) {
            server._watch('./app/**/*.html')
        },

        contentBase: path.join(__dirname, "app"), //jidhar index file hoti hai it is easy to find all path but difficult to find index so tab ye use kiya h
        hot: true, //inject karta hai css matlab mene agar css me ek file chng ki to mujhe refresh krna padhta h but hot se ye mujhe khud sab krke dega
        port: 1500, //it is used to broadcast the port
        host: '0.0.0.0'
    },
    mode: "development",
//        watch:true, 
//    nikalo after you configure development server
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader?url=false',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: postCSSPlugins
                        }
                    }
                ],
            }
        ]
    }
}
