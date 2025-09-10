import './App.css'
import AgeInfo from './components/AgeInfo/AgeInfo';
import DogCard from './components/DogCard/DogCard';
import Goodbye from './components/Goodbye/Goodbye'
import Greeting from './components/Greeting/Greeting'

function App() {
  return (
    <div>
      {/* <p>Hello, React !</p> */}
      <Greeting />
      <Greeting />
      <Greeting />
      <Goodbye name={"Bob"} />
      <Goodbye name={"John"} />
      <AgeInfo age={23} name={"Andrey"} />
      <AgeInfo age={26} name={"Fred"} />
      <DogCard />
    </div>

  );
}

export default App

