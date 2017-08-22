
//Store（数据层）：用来存放应用的状态，一旦发生变动，就提醒Views要更新页面
//store是用来管理状态的，状态就是数据，用store来管理的状态可以在任意一个组件里得到，也可以在任意一个组件里进行更改。更改之后，所有使用该状态的组件都会进行更新，数据共享

//状态=====数据

//触发器
var EventEmitter =require("events").EventEmitter     
//扩展
var assign=require("object-assign")


const store=assign({},EventEmitter.prototype,{
     position:{
     	latitude:null,
     	longitude:null,
     	address:''
     },
     currentWord:null,
     getData:function(url,fn){
		$.ajax({
			url:url,
			success:fn
		})
	},
     getPosition:function(){
     	return this.position
     },
     changePosition:function(position){
     	this.position=position
     	
     	this.emit('position-change')
 
     },
      changeCurrentWord:function(currentWord){//改变点击热词
     	this.currentWord=currentWord
     	
     	this.emit('current-change')
 
     },
	addPositionListener:function(callback){
		this.on("position-change",callback) //绑定事件
		
	},
	addCurrentListener:function(callback){
		this.on("current-change",callback) //绑定事件
		
	}
})


export default store









































