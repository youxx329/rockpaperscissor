import { useState } from 'react';
import './App.css';
import Box from './component/Box';

// 1. 박스 2개 (타이틀, 이미지, 결과)
// 2. 가위 바위 보 버튼
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3-4 의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패 결과에 따라 테두리 색 바뀐다 (이기면-초록, 지면-빨강, 비기면-검정)

const choice = {
  rock : {
    name : "Rock",
    img : process.env.PUBLIC_URL + "/images/rock.png"
  },
  scissors : {
    name : "Scissors",
    img : process.env.PUBLIC_URL + "/images/scissors.png"
  },
  paper : {
    name : "paper",
    img : process.env.PUBLIC_URL + "/images/paper.png"
  }
}


function App() {
  const [userSelect, setUserSelect] = useState(choice.rock)
  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
  };
  return (
    <div>
      <div className='box-wrap'>
        <Box name="You" item={userSelect}/>
        {/* <Box name="Computer" /> */}
      </div>
      <div className='box-wrap'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
