import './App.css'
import AgeInfo from './components/AgeInfo/AgeInfo';
import Counter from './components/Counter/Counter';
import DogCard from './components/DogCard/DogCard';
import Goodbye from './components/Goodbye/Goodbye'
import Greeting from './components/Greeting/Greeting'
import PersonalGreeting from './components/PersonalGreetine/PersonalGreeting';
import ProfileCard from './components/ProfileCard/ProfileCard';
import SpaceMissionForm from './components/SpaceMissionForm/SpaceMissionForm';

function App() {
  return (
    <div>
      <SpaceMissionForm />
      <PersonalGreeting />
      <Greeting />
      <Greeting />
      <Greeting />
      <Counter />
      <Goodbye name={"Bob"} />
      <Goodbye name={"John"} />
      <AgeInfo age={23} name={"Andrey"} />
      <AgeInfo age={26} name={"Fred"} />
      <DogCard />
      <ProfileCard
        avatar="C:\\Juri_Buerkle\\57fs_TypeScript\\src\\Lesson_2_React\\project-01\\src\\components\\ProfileCard\\Avatar.jpg"
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
