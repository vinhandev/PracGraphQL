import logo from './logo.svg';
import './App.css';
import { gql, useQuery } from '@apollo/client';

const GET_USERS = gql`
  query ExampleQuery {
    users {
      id
      login
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <div>is loading ...</div>;
  if (error) return <div>{error.message}</div>;
  return <div>{JSON.stringify(data)}</div>;
}

export default App;
