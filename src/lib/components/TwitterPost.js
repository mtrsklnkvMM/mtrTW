import * as React from 'react';
import TwitterClient from '../twitterclient';

class TwitterPost extends React.Component {

  constructor(props) {
      super(props);
      this.client = new TwitterClient()
  } 
  componentDidMount(){
  }
  handleClick(){
      const params = {
        status: "test1"
      }
      this.postTweet(params)
  }
  postTweet(params){
      this.client.postTweet(params).then((response) => {
         
      })
  }
  render() {
    return (
        <div >
            <button onClick={this.handleClick.bind(this)}>Post</button>
        </div>
      );
  }
}

export default TwitterPost;

TwitterPost.defaultProps = {
    
}
TwitterPost.propTypes = {
    
};