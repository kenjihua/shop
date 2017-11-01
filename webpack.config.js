
module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/dataCenter/app.jsx",
    output: {
        path: __dirname + "/dataCenter/build",
        filename: "bundle.js"
    },
    module: {
        //loaders加载器
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:{
                	presets:['react','es2015','stage-1'],
                	plugins:['react-html-attrs','transform-decorators-legacy','transform-decorators'],//添加组件的插件配置
                }
            },
            //下面是添加csss的loader，即css模块化的配置方法
            { 
            	test: /\.css$/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]'
            }
        ]
    }
};
