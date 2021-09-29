import People from '../components/People';
import Probability from '../components/Probability';
import { Inner, Wrapper, Wrapper2 } from '../components/styles';

const Home = () => {
  return (
    <Wrapper>
      <Inner>
        <Wrapper2>
          {/* <People /> */}
          <Probability />
        </Wrapper2>
      </Inner>
    </Wrapper>
  );
};

export default Home;
