import React,{Component} from 'react';


class ImageFeedResult extends Component {

   render(){
       return (
           <div>
            <img src={this.props.url} alt="image text"/>
            <h5>{this.props.title}</h5>

           </div>
       )
   }
}

export default ImageFeedResult;