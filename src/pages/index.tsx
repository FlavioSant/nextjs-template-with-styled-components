import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div style={{ color: 'white' }}>
      <h1>Hello World</h1>
      <h2>{`API_URL=${process.env.API_URL}`}</h2>
    </div>
  );
};

export default Home;
