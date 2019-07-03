import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client'
import {schema} from './gqlWrapper';
import { SchemaLink } from 'apollo-link-schema';


const client = new ApolloClient({
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache()
})

export {client}