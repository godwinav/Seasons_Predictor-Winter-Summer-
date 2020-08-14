import React from 'react';
import './Seasonss.css';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay'
import Spinner from './Spinner';





class App extends React.Component{
    // initialize with the 'constructor function '
    
    //  THIS IS THE ONLY TIME WE DO A DIRECT ASSIGNMENT!
        state = {lat: null, errorMessage:"" } //this is 100% equivalent to using the constructor method.
       

 

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat:position.coords.latitude}),   
            // To update our state object, We called setState

                
       
            err=> this.setState({errorMessage:err.message}) // We DID NOT WRITE SOMETHING LIKE
            // this.state.lat= position.coords.latitude
            
        );
    };
    renderContent(){

        if (!this.state.lat && this.state.errorMessage){
            return(
                <div>Error:{this.state.errorMessage}</div>
            )
        }
        if(this.state.lat && !this.state.errorMessage){
            return(
              <SeasonsDisplay lat={this.state.lat}/>
            )
        }
        return(
            <Spinner message="Please Allow Access To Your Loacation"/>
        )

    }
    // React says we have to define render!
    render(){
      
    
       return(
           <div className= "border">
               {this.renderContent()}
           </div>
       )
        
           

    }
}


ReactDOM.render(<App/>, document.querySelector("#root"));