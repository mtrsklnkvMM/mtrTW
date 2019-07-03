import * as React from 'react';
import PropTypes from 'prop-types';
import TwitterClient from '../twitterclient';

class TwitterEmbed extends React.Component {

  constructor(props) {
      super(props);
      this.client = new TwitterClient()
      this.state = {
          text : ""
      }
  } 
  componentDidMount(){
   this.getTweet()
  }
  componentDidUpdate(){
  }
  getTweet(){
      const {id} = this.props
      this.client.getTweet(id).then((response) => {
        const text = response["text"]
        this.setState({text:text})
      })
  }
  render() {
    const {text} = this.state
   
    return (
        <div >
            {text}
        </div>
      );
  }
}

export default TwitterEmbed;

TwitterEmbed.defaultProps = {
    id:"1145713364921913344"
}
TwitterEmbed.propTypes = {
    id:PropTypes.string
};