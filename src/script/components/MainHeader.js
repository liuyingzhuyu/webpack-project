
import store from "../_flux/store"
class MainHeader extends React.Component{
	constructor(props,context){
		super(props,context)
		this.state={
			hotWords:null,
			headerSwiper:null,
			position:store.getPosition()
		}
	
	}
	toSearch(){
		window.location.hash="search" //设置跳转的hash
	}
	
	
	
	render(){
		const {temperature,description,position}=this.state    //解构赋值
		return(
		
			<header  >
				<p>
					<a>{position.address || "获取地址中...."}</a>
					<span>{temperature}{description}</span>
				</p>
				<p className="search-box"><input  onFocus={this.toSearch}  type="text" placeholder="搜索商家、商品"/></p>
			
				<div className="swiper-container hotWords">
				  <div className="swiper-wrapper">
				    {this.putHotWord()}
				  </div>
				</div>
			</header>
			
		
			
		)
	
	}
//	
//	componentWillReceiveProps(props){//属性刚刚获取出来，还没有给this.props上更新
//		this.getWeather(props)
//		this.getHotWord(props)
//		
//	}
//	
	getData(url,fn){
		$.ajax({
			url:url,
			success:fn
		})
	}
	//https://mainsite-restapi.ele.me/bgs/weather/current?latitude=39.928353&longitude=116.416357
	getWeather(){
		if(!this.state.position){return;}//如果定位信息不存在 ，返回
		var that=this;
		this.getData("https://mainsite-restapi.ele.me/bgs/weather/current?latitude="+this.state.position.latitude+"&longitude="+this.state.position.longitude,function(result){
			
			//console.log(1)
		//	console.log(result)
			that.setState({
				temperature:result.temperature,
				description:result.description,

			})
			
		})
	}
	
	//https://mainsite-restapi.ele.me/shopping/v3/hot_search_words?latitude=39.928353&longitude=116.416357
	getHotWord(){
		if(!this.state.position){return;}
		var that=this;
		this.getData('https://mainsite-restapi.ele.me/shopping/v3/hot_search_words?latitude='+this.state.position.latitude+'&longitude='+this.state.position.longitude,function(result){
			//console.log(2)
			//console.log(result)
			that.setState({
				hotWords:result
			})
			
		})
	}
	
	
	putHotWord(){
		var arr=[];
		if(this.state.hotWords){
			this.state.hotWords.forEach((word,i)=>{
				console.log(word.word)
				arr.push( <div className="swiper-slide ">{word.word}</div>)
			})
		}
		return  arr;
	}
	
	componentDidMount(){//操作真实dom
		   //轮播组件实例化
		    this.state.headerSwiper = new Swiper('.hotWords',{
			  freeMode : true,
			  slidesPerView : 'auto',
			  freeModeSticky : true 
		  });
		  
		  //store自定义事件=====》前端更新数据
		  var that=this
		  store.addPositionListener(function(){//数据发生更改，就会触发
		  	  that.setState({
		  	  	 position: store.getPosition()
		  	  })
		  	  
		  	  
		  	  //设置定位信息后 ，获取天气和热词
		  	  that.getWeather()
		      that.getHotWord() 
		  	
		  })
  
	}












	componentDidUpdate(){
		console.log( this)
		if(this.state.hotWords){
			 this.state.headerSwiper.update() //轮播组件更新
		}
		  
	}
	
	
	
	
	
}


export default MainHeader












