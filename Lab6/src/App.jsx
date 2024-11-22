import './App.css';

import ToDoContainer from './components/ToDoFolder/ToDoContainer'
import PageTitle from './components/PageTitle/PageTitle';
function App() {
 

  return (
    <div className="app-container">
    <PageTitle title = "ToDo App"> </PageTitle>
    <ToDoContainer></ToDoContainer>
  </div>
  
  );
}

export default App;
