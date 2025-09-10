import './App.css'
import AgeInfo from './components/AgeInfo/AgeInfo';
import DogCard from './components/DogCard/DogCard';
import Goodbye from './components/Goodbye/Goodbye'
import Greeting from './components/Greeting/Greeting'
import ProfileCard from './components/ProfileCard/ProfileCard';

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
      <ProfileCard
        avatar="c:\\Juri_Buerkle\\57fs_TypeScript\\src\\Bild\\Avatar.jpg"
        name="Matt Damon"
        description="Dumbest actor of all time"/>
      <ProfileCard
        avatar="c:\\Users\\Zbook\\Pictures\\Saved Pictures\\Batman.jpg"
        name="Ben Affleck"
        description="Smartest actor of all time"/>
    </div>

  );
}

export default App

