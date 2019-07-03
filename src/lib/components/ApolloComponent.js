import React from 'react'
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'

const TWEET_QUERY = gql`
  {
    tweet (id: "1145713364921913344") {
      text
      id
    }
  }
`
const SEARCH_TWEET_QUERY = gql`
  {
    tweets (keyword: "australia", count: 5) {
      id
      text
      user {
          name
      }
    }
  }
`
const POST_TWEET_MUTATION = gql`
    mutation CreateTweet {
        createTweet(status:"test2") {
            id
        }
    }
`

const GetTweet = () => (
    <Query query={TWEET_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>; 
        return <div> {data.tweet.text} </div>
      }}
    </Query>
)

const SearchTweet = () => (
    <Query query={SEARCH_TWEET_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;  
        return data.tweets.map((tweet, i) => { 
            return <div key={"test" + i} > <span>{tweet.user.name}</span><span> : </span><span>{tweet.text}</span></div>
        })
      }}
    </Query>
)

const PostTweet = () => (
    <Mutation mutation={POST_TWEET_MUTATION}>
        {createTweet => <button onClick={createTweet}>Submit</button>}
    </Mutation>
)
export  { GetTweet, SearchTweet, PostTweet}