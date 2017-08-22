
////actionCreate就是一个纯对象，上面有很多方法，供View 去调用，方法被调用之后会产生一个action,交予dispatcher来进行处理





import dispatcher from "./dispatcher"

var actions={
	 changePosition:function(position){
	 	  
	       dispatcher.dispatch({
	       	   type:"CHANGE_POSITION",
	       	   position:position
	       })
     },
     changeCurrentWord:function(currentWord){
     	 dispatcher.dispatch({
	          type:"CURRENT_WORD",
		      currentWord:currentWord
	     })
     }

}

export default actions








































