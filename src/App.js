import { useState } from 'react';
import './App.css';
import Box from './component/Box.js';

// 1. 박스 2개 (타이틀, 이미지, 결과)
// 2. 가위 바위 보 버튼
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3-4 의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패 결과에 따라 테두리 색 바뀐다 (이기면-초록, 지면-빨강, 비기면-검정)

const choice = {
  rock : {
    name : "Rock",
    img : process.env.PUBLIC_URL + "/images/rock-ico.png"
  },
  scissors : {
    name : "Scissors",
    img : process.env.PUBLIC_URL + "/images/v-ico.png"
  },
  paper : {
    name : "Paper",
    img : process.env.PUBLIC_URL + "/images/paper-ico.png"
  }
}


function App() {
  const [userSelect, setUserSelect] = useState(choice.rock)
  const [computerSelect, setComputerSelect] = useState(choice.rock)
  const [result, setResult] = useState("");
  // const [resultColor, setColorChange] = useState()

  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
    // setColorChange();
  };

  const judgement = (user, computer) => {
    if(user.name === computer.name) {
      return "tie"
    } else if (user.name === "Rock") return computer.name === "Scissors" ? "win" : "lose"
    else if (user.name === "Scissors") return computer.name === "Paper" ? "win" : "lose"
   else if (user.name === "Paper") return computer.name === "Rock" ? "win" : "lose"
  }

  const randomChoice =() => {
    let itemArray = Object.keys(choice); // 객체에 키값만 뽑아서 어레이로 만들어주는 함수
    console.log(itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log(randomItem);
    let final = itemArray[randomItem];
    return choice[final];
  }
  return (
    <div>
      <div className='box-wrap'>
        <Box name="You" item={userSelect} result={result} title="You"/>
        <Box name="Computer" item={computerSelect} result={result} title="Computer"/>
      </div>
      <div className='box-wrap'>
      <button onClick={() => play("scissors")} className="btn" style={{ backgroundImage: "url('/images/v-ico.png')" }}></button>
        <button onClick={() => play("rock")} className='btn' style={{ backgroundImage: "url('/images/rock-ico.png')" }}></button>
        <button onClick={() => play("paper")} className='btn' style={{ backgroundImage: "url('/images/paper-ico.png')" }}></button>
      </div>
    </div>
  );
}

export default App;
