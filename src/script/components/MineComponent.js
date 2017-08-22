
import FooterComponent from "./FooterComponent"

class MineComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		
		
		
		
	}
	render(){
		return(
		
			<div className="root-box"  >
				 
					
					 <section>
				       MineComponent
				       
				       
				       
				       
				      </section>
				    			
					 <FooterComponent active={this.props.route.path}/>
			  </div>
			
		
			
		)
	
	}
	
	
}


export default MineComponent












