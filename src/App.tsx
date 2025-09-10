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
        avatar="https://www.businessinsider.de/wp-content/uploads/2019/11/pjimage-28.jpg"
        name="*Matt Damon"
        description="*Dumbest actor of all time"/>
      <ProfileCard
        avatar="https://assets-cache0.moviebreak.de/system/bilder/story/photo/5218446dbda00c02e2000039/Batman.jpg"
        name="Ben Affleck"
        description="Smartest actor of all time"/>
    </div>

  );
}

export default App

