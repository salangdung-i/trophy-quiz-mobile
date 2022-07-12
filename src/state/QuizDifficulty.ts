import { atom } from 'recoil';

export default atom<string | undefined>({
  key: 'QuizDifficulty',
  default: undefined,
});

// atom : 객체를 (key, default)파라미터로 받는 function
// key : unique, atom으로 만든 key들이 각각 unique
// atom을 활용해서 global state를 만든다.
// useRecoilState, setQuizDifficulty 를 사용하면 default가 바뀌는 것이다.

// selector atom이 하지 못하는 기능을 selector가 한다.
// 1. 이미 선언된 아톰이 값이 변할 떄 그 순간 아톰을 구독하고 있다가 selector가 다시 한번 실행되어진다. selector에 할당된 함수가
// => atom을 구독하는 기능
// 2. response data 값을 자기의 값으로 가질수 있다.
// selector를 통해서 글로벌 스테이트 값으로 서버와 통신에서 받아온 리스폰스 값을 가질 수 있게 된다.
