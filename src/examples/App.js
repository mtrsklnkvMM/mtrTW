import React from "react";
import { TwitterEmbed, TwitterPost, TwitterSearch, SearchTweet,GetTweet, PostTweet } from "../lib";
import { ApolloProvider } from "react-apollo";
import { client } from '../lib/gqlApollo';

 const App2 = () => (
   <div >
     <TwitterEmbed  />
     <TwitterPost  />
     <TwitterSearch />
   </div>
 );



const App = () => (
  <ApolloProvider client={client}>
      <GetTweet />
      <SearchTweet />
      <PostTweet />
  </ApolloProvider>
);
export default App;