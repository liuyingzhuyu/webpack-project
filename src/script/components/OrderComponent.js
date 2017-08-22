

import FooterComponent from "./FooterComponent"
class OrderComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		
		
		
		
	}
	render(){
		return(
			
		
		<div className="root-box"  >
			 
				
				 <section>
			       OrderComponent
			      </section>
			    			
				 <FooterComponent active={this.props.route.path}/>
		  </div>
		
			
		)
	
	}
	
	
}


export default OrderComponent












