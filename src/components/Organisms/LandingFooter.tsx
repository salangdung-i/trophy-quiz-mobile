import { useHistory } from 'react-router';
import { useResetRecoilState } from 'recoil';

import { InitialPropsState } from 'src/state';
import { FixedFooter } from 'components/Molecules';
import Atoms from 'components/Atoms';

const LandingFooter = () => {
  const history = useHistory();

  // resetIntialProps , useResetRecoilState 리코일에서 제공하는 hook을 통해서 받아지는 함수
  const resetIntialProps = useResetRecoilState(InitialPropsState);

  const handleClick = () => {
    resetIntialProps();
    history.push('/quiz');
  };

  return (
    <FixedFooter>
      <Atoms.Button
        designType="primary400"
        height="56px"
        width="100%"
        borderRadius="8px"
        fontSize="20px"
        onClick={handleClick}
      >
        START
      </Atoms.Button>
    </FixedFooter>
  );
};

export default LandingFooter;
