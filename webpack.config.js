//console.log(__dirname) //输出当前文件的 绝对路径  //D:\1708js3\1708js3\0713react\pm\react-project

var HtmlWebpackPlugin=require("html-webpack-plugin")
var webpack=require("webpack")
var ExtractTextPlugin=require("extract-text-webpack-plugin")

//进行webpack打包配置
module.exports={
	//入口文件-----检测入口文件引入的模块是否发生变化，
	entry:"./src/app.js",  
	//输出配置
	output:{
		path:__dirname+'/build',//输出路径设置  ---->绝对路径
		filename:'app.js'    //文件名设置
		//filename:'app_[hash].js'    //文件名设置hash值,在文件名后面加 [hash]
		//filename:'app'+Date.now()+'.js'// //文件名设置时间戳
	},
	devServer:{//配置热更新服务器----
		proxy:{//代理服务器
			'/bgs': {// 设置标志/shopping
		    target: 'https://mainsite-restapi.ele.me', //目标地址
		    changeOrigin: true ,//跨域
		    secure: false
		  },
		  '/shopping': {// 设置标志/shopping
		    target: 'https://mainsite-restapi.ele.me', //代理地址
		    changeOrigin: true, //跨域
		    secure: false
		  }
		
		},

		contentBase:'./build',  //配置服务启动位置
		host:'localhost',//配置域名
		port:'9000',//配置端口
		historyApiFallback:false  //不启用浏览器的历史记录
	},
	plugins:[
        //让index.html也能打包过去，并且引上对应的文件，可以实时更新html文件
	    new HtmlWebpackPlugin({//生成一个新的html文件
	    	template:'./src/index.html',//设置模板
	    	 filename:'index.html'  //新的html文件名字
	    }),
	    new ExtractTextPlugin({//从HTML中提取css片段
	    	filename:'app.css',
	    	allChunks:true
	    }),
//	    new webpack.optimize.UglifyJsPlugin({//自带的压缩插件可以压缩js，不用下载
//          compress: {
//            warnings: false
//          }
//      })
	],
	module:{
		loaders:[
		//***********不提取css片段***********
//		   {//接口文件引入css的配置，先提取css文件（css-loader），把css文件添加到html文件中的style标签中（style-loader）
//		  	  test:/\.css$/,
//		  	  loader:'style-loader!css-loader'
//		   },
//		    {//接口文件引入scss的配置，先转换成css（sass-loader），提取css文件，把css文件添加到html文件中的新的style标签中
//		  	  test:/\.scss$/,
//		  	  loader:'style-loader!css-loader!sass-loader'
//		   }


         //******从HTML中提取css片段**********
		     {//接口文件引入css的配置，先提取css文件（css-loader），把css文件添加到html文件中的style标签中（style-loader）
		  	  test:/\.css$/,
		  	  loader:ExtractTextPlugin.extract({
		  	  	fallback:'style-loader',
		  	  	//use:'css-loader'
		  	  	use:[
		  	  	   {
		  	  		loader:'css-loader',
		  	  		options:{
		  	  		//	minimize:true  //压缩css
		  	  		}
		  	       }
		  	  	]
		  	  	
		  	  	
		  	  })
		   },
		    {//接口文件引入scss的配置，先转换成css（sass-loader），提取css文件，把css文件添加到html文件中的新的style标签中
		  	  test:/\.scss$/,
		  	   loader:ExtractTextPlugin.extract({
		  	  	fallback:'style-loader',
		  	  	use:'css-loader!sass-loader'
		  	  })
		   },
//		     {//使用jsx编译js文件
//		  	  test:/\.js$/,
//		  	  loader:'jsx-loader'
//		   }
             {//使用jsx编译js文件
		  	  test:/\.js$/,
		  	  loader:'babel-loader',
		  	  query:{
		  	  	presets:['es2015','react']
		  	  }
		   }
		]
	}
	
}





















//	 


