import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { RetryLink } from 'apollo-link-retry';
import { Operation, split } from 'apollo-link';
import { getLocalToken } from '../Utilities';
// import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';


const isLocal = window.location.hostname.includes('localhost');
console.error("Pbale host", isLocal, window.location.hostname)


const apiUrl = process.env.REACT_APP_GQL_API_URL;
// const wsUri = apiUrl?.replace('/gql', isLocal ? '/subscriptions' : ':8443/subscriptions').replace('http', 'ws') ?? "DNE";
// console.log("WS URI", wsUri);

const httpLink = createHttpLink({ uri: apiUrl });
// const wsLink = new WebSocketLink({
//   uri: wsUri,
//   options: {
//     reconnect: true,
//     connectionParams: {
//       authToken: `Bearer ${getLocalToken()}`,
//     },
//     connectionCallback: (err: any) => {
//       console.log("Conn callback", err);
//     },
//   },
// });

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  // wsLink,
  httpLink,
  httpLink,
);

const retryLink = new RetryLink({
  delay: {
    initial: 250,
    max: 2500,
    jitter: true,
  },
  attempts: {
    max: 3,
    retryIf: (error: any, operation: Operation) => {
      const doNotRetryCodes = [500, 400];
      return !!error && !doNotRetryCodes.includes(error.statusCode);
    },
  },
});

const authLink = setContext((_, { headers }) => {

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${getLocalToken()}`,
    },
  };
});

export default new ApolloClient({
  link: authLink
    .concat(retryLink)
    .concat(link),
  cache: new InMemoryCache(),
});
