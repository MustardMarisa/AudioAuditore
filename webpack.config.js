module.exports = {
    entry: './src/app/index.js',//entrada, el codigo que se traducira
    output: {//salida a donde pondra la traduccion, requiere ruta absoluta
        path: __dirname + '/src/public',//ruta
        filename: 'bundle.js'//nombre del archivo
    },
    module:{
        rules:[
            {
                use: 'babel-loader',//permite a webpack usar babel
                test: /\.js$/, //expresion regular para tomar a todos los archivos con terminacion .js
                exclude: /node_modules/ //evita que la expresion regular tome los archivos en la carpeta especificada 
            }
        ]
    }
};