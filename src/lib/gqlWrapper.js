  
  import { makeExecutableSchema } from 'graphql-tools';
  import TwitterClient from './twitterclient'

  const typeDefs = `
    type Tweet {
        id: ID
        text: String
        user: User
    }
    type User {
        name: String!
    }
    type Query {
         tweets(keyword:String, from:String, count:Int): [Tweet!]!
         tweet(id: ID!): Tweet!
     }
    type Mutation {
        createTweet(status: String!): Tweet!
        likeTweet(id: String!): Tweet!
    }
  `

  const twClient = new TwitterClient()
  const resolvers = {
    Query: {
      tweet: (parent, args) => {
        const { id } = args
        return twClient.getTweet(id).then(res => res)
      },
      tweets:(parent, args) => {
        const { keyword,count } = args
        const params = "q="+keyword+"&count=" + count
        return twClient.searchTweet(params).then(res => res.statuses)
      },
    },
    Mutation: {
        createTweet:(parent, args) => {
            const { status } = args
            const params = {
                status: status
            }
            return twClient.postTweet(params).then(res => res)
        },
        likeTweet:(parent, args) => {
            const { id } = args
            return twClient.likeTweet(id).then(res => res)
        }
    }
  }

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  });

  export {schema}