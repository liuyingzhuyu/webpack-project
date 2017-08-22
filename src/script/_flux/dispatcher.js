



//dispatcher专门接受actionCreate传递过来action，然后去调用store的方法（更改数据）
//做判断，更改store的数据




import store from "./store"

var Dispatcher=require('flux').Dispatcher  //构造器


const dispatcher=new Dispatcher()

//会在actionCreate传入action的时候触发
dispatcher.register((action)=>{ //注册事件
	
	switch(action.type){
		case "CHANGE_POSITION":
		     store.changePosition(action.position)
		     break;
		case "CURRENT_WORD":
		     store.changeCurrentWord(action.currentWord)
		     break;
	}
	
	
	
	
})


export default dispatcher



























