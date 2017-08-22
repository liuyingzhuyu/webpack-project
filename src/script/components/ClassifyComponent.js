
import store from "../_flux/store"


class ClassifyComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		this.state={
			    position:store.getPosition(),
				currentWord:store.currentWord,
				restaurants:null
		}
	}
	render(){
		console.log(this.state.currentWord,"0000")
		return(
			  
		  <div className="root">
		      <header>
	             <p className="seach-box"> 
	        		<a href="#/search" className="glyphicon glyphicon-chevron-left"></a>
	        		<input type="text" placeholder="请输入商品名称"   value={this.props.params.wd}/>    
	        		<a href="#/search"  className="glyphicon glyphicon-remove  cha"></a>
	        	</p>
	        	<div className="paixu">
	        	    <a  className="but">分类</a>
			    	<a  className="but">排序</a>
			    	<a  className="but">筛选</a>
	        	</div>
	        	</header>
	        	<div className="dianContainer">
		        	{this.putRestaurants()}
	        	 </div>
		  </div>
		)
	
	}

   
	getRestaurants(){
		console.log(encodeURI("凉皮"))
		//console.log(this.state.position,222)
		
		if(this.state.position.latitude && this.state.currentWord){
			var that=this;
			//关键字转码
			var str=""
			str=this.state.currentWord
			var currentWord= encodeURI(str)
			console.log(currentWord,999)
			console.log('https://mainsite-restapi.ele.me/shopping/v1/restaurants/search?offset=0&limit=20&keyword='+currentWord+'&latitude='+this.state.position.latitude+'&longitude='+this.state.position.longitude+'&search_item_type=2&extra[]=activities',333)
			
			this.getData('https://mainsite-restapi.ele.me/shopping/v1/restaurants/search?offset=0&limit=20&keyword='+currentWord+'&latitude='+this.state.position.latitude+'&longitude='+this.state.position.longitude+'&search_item_type=2&extra[]=activities',function(result){
				console.log(result)
				
				that.setState({
					restaurants:result
				})
				
			})
		}
	}
		
		
    getData(url,fn){
		$.ajax({
			url:url,
			success:fn
		})
	}
    
//  this.state.hotWords.forEach((word,i)=>{
//				//console.log(word.word)
//				arr.push(<li  onClick={this.getCurrentSearchWord.bind(this,word.word)}  ><a href={"#/classify/"+word.word}>{word.word}</a></li>)
//			})
//  
//  <div className="dian-one">
//				         	<img src="https://fuss10.elemecdn.com/8/2f/eec7117e9718766bd0a9831e3bcc9jpeg.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/"/>
//				         	<div className="dianName" >     
//				         		<h5>{dian.restaurant.name}<span >票</span></h5>
//				         		<p>☆☆☆☆☆<b>{dian.restaurant.rating} </b>    月售{dian.restaurant.recent_order_num}单</p>
//				         		<p>¥{dian.restaurant.float_minimum_order_amount}起送/配送费¥{dian.restaurant.tips}/¥50/人       <span >164m/40分钟</span></p>	
//				         	</div>
//			            </div>
    putRestaurants(){
		var arr=[];
		if(this.state.restaurants){
			var restaurants=null
			console.log(this.state.restaurants[0].restaurant_with_foods,5555555555)
			restaurants=this.state.restaurants[0].restaurant_with_foods
			
			
			restaurants.forEach((dian,i)=>{
				//console.log(word.word)
				arr.push(   <div className="dian-one">
				         	<img src="https://fuss10.elemecdn.com/8/2f/eec7117e9718766bd0a9831e3bcc9jpeg.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/"/>
				         	<div className="dianName" >     
				         		<h5>{dian.restaurant.name}<span >票</span></h5>
				         		<p>☆☆☆☆☆<b>{dian.restaurant.rating} </b>    月售{dian.restaurant.recent_order_num}单</p>
				         		<p>¥{dian.restaurant.float_minimum_order_amount}起送/配送费¥{dian.restaurant.tips}/¥50/人       <span >164m/40分钟</span></p>	
				         	</div>
			            </div>)
			})
		}
		return  arr;
	}
	componentWillMount(){//将渲染
	   var that=this
	   store.addCurrentListener(function(){//数据发生更改，就会触发
	  	  that.setState({
	  	  	 position: store.currentWord    //更新state的值
	  	  })
	   })
        console.log(111111111111)
		this.getRestaurants()
	}
	
	componentDidMount(){
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}


export default ClassifyComponent












