import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
// useRecoilState 파라미터 atom을 넣어준다. 꺼내서 쓰기 위해서
// 마치 useState 처럼 쓰임
import {
  ANY_DIFFICULTY,
  difficulties,
  DIFFICULTY_SELECT_TEST_ID,
} from 'src/constant';
import { QuizDifficultyState } from 'src/state';
import { Content } from 'components/Molecules';
import Atoms from 'components/Atoms';

const QuizDifficulty = () => {
  const [quizDifficulty, setQuizDifficulty] = useRecoilState(
    QuizDifficultyState,
  );

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setQuizDifficulty(e.target.value);
  };

  return (
    <Content header="Difficulty">
      {/*  select 태그를 return  */}
      <Atoms.Select
        data-testid={DIFFICULTY_SELECT_TEST_ID}
        margin="16px 0px"
        value={quizDifficulty}
        onChange={handleChange}
      >
        {difficulties.map((difficulty) => (
          <option
            key={difficulty}
            value={difficulty == ANY_DIFFICULTY ? undefined : difficulty}
          >
            {difficulty == ANY_DIFFICULTY
              ? difficulty
              : difficulty.toUpperCase()}
          </option>
        ))}
      </Atoms.Select>
    </Content>
  );
};

export default QuizDifficulty;
