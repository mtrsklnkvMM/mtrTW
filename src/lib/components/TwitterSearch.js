import * as React from 'react';
import TwitterClient from '../twitterclient';

class TwitterSearch extends React.Component {

  constructor(props) {
      super(props);
      this.client = new TwitterClient()
  } 
  componentDidMount(){
  }
  handleClick(){
      this.searchTweet()
  }
  searchTweet(){
    const params = "q=test1from%3Amtrsklnkv&result_type=recent&count=1"
    
    this.client.searchTweet(params).then((response) => {
        const statuses = response.statuses
        if(statuses.length){
            const id = statuses[0].id_str
            this.client.likeTweet(id)
        }
    })
  }
  render() {
    return (
        <div >
            <button onClick={this.handleClick.bind(this)}>Search</button>
        </div>
      );
  }
}

export default TwitterSearch;

TwitterSearch.defaultProps = {
    
}
TwitterSearch.propTypes = {
    
};