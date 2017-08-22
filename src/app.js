

//引入样式
require("./style/app.scss")



//引入路由
import {Router,Route,hashHistory,IndexRedirect,IndexRoute}  from 'react-router'


//引入组件
import RootComponent from "./script/components/RootComponent"
import MainComponent from "./script/components/MainComponent"
import FindComponent from "./script/components/FindComponent"
import OrderComponent from "./script/components/OrderComponent"
import MineComponent from "./script/components/MineComponent"
import SearchComponent from "./script/components/SearchComponent"
import ClassifyComponent from "./script/components/ClassifyComponent"










ReactDOM.render(
	  
	//配置路由
	<Router history={hashHistory}>
	 
	    <Route path="/" component={RootComponent}> 
	           //重定向
	           // <IndexRedirect to="/main"/>
	          //默认路由
	           <IndexRoute component={MainComponent}/>
	           
	            //子路由 
	          <Route path="main" component={MainComponent}></Route>  
	          <Route path="find" component={FindComponent}></Route>   
	          <Route path="order" component={OrderComponent}></Route> 
	          <Route path="mine" component={MineComponent}></Route>   
	          <Route path="search" component={SearchComponent}></Route> 
	               //路由传参数classify/:wd
	          <Route path="classify/:wd" component={ClassifyComponent}></Route> 
	          //其他匹配
	          <Route path="*" component={MainComponent}></Route>   
	          
	    </Route>
	</Router>
	,document.getElementById("root"))


















/*
ReactDOM.render(
	  
	//配置路由
	<Router history={hashHistory}>
	     //父亲路由//当路径变成"/",渲染RootComponent组件
	    <Route path="/" component={RootComponent}> 
	           //子路由 
	          <Route path="main" component={MainComponent}></Route>   
	          <Route path="find" component={FindComponent}></Route>   
	          <Route path="order" component={OrderComponent}></Route> 
	          <Route path="mine" component={MineComponent}></Route>   
	          
	          
	    </Route>
	</Router>
	,document.getElementById("root"))




//重定向方式
	           <IndexRedirect to="/main"/>
	           
//默认路由：
	      <IndexRoute component={MainComponent}/>









*/








