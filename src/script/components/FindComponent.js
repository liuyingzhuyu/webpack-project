
import FooterComponent from "./FooterComponent"

class FindComponent extends React.Component{
	constructor(props,context){
		super(props,context)
		
		
		
		
	}
	render(){
		return(
			
		
		
		<div className="root-box"  >
			 
				
				 <section>
			       FindComponent
			      </section>
			    			
				 <FooterComponent active={this.props.route.path}/>
		  </div>
		
			
		)
	
	}
	
	
}


export default FindComponent












