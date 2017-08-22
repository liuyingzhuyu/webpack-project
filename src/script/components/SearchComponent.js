
import actions from "../_flux/actions"
import store from "../_flux/store"
class SearchComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		this.state={
			
				hotWords:null,
				currentWord:store.currentWord
		}
	}

	render(){
//		console.log(this)
		return(
			
		  <div className="root">
		        <p className="seach-box"> 
	        		<a href="#/main" className="glyphicon glyphicon-chevron-left"></a>
	        		<input type="text" placeholder="请输入商品名称"/>       
	        	</p>
	        	<div className="hot-box">
	        	    <h4 className="hotSearch"> 热门搜索</h4>
		        	<ul className="hotWords">
		        		{this.putHotWord()}
		        	</ul>
	        	</div>
	     
		  </div>
		)
	
	}
	
	///////////////////////
	
	
	////////////////////////
	
	
	componentWillMount(){
		this.getHotWord()
		
	}
	
	getHotWord(){
		var that=this;
		store.getData('https://mainsite-restapi.ele.me/shopping/v3/hot_search_words?geohash=wx4gj6he4qd2&latitude=39.91388&longitude=116.60418',function(result){
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
				//console.log(word.word)
				arr.push(<li  onClick={this.getCurrentSearchWord.bind(this,word.word)}  ><a href={"#/classify/"+word.word}>{word.word}</a></li>)
			})
		}
		return  arr;
	}
	

    //获取点击的热词
    getCurrentSearchWord(currentWord){
   	   	actions.changeCurrentWord(currentWord)
   	   	
   	   	console.log(this.state.currentWord)
   }
   














	componentWillDidUpdate(){
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}


export default SearchComponent












