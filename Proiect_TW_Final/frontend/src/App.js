import './App.css';
import Navbar from './components/navbar/Navbar';
import {BugList} from './components/bug-list/BugList';
import { SignInForm } from './components/sign-in-form/SignInForm';
import { ProjectsForm } from './components/projects-form/ProjectsForm';

function App() {
  let component;
  switch(window.location.pathname){
    case"/login":
      component=<SignInForm/>
      break
    case"/bugs":
      component=<BugList/>
      break
    case"/proiecte":
       component=<ProjectsForm/>
        break
  }
  return (
    <div className="App">
      <Navbar/>
      {component}
    </div>
  );
}

export default App;
