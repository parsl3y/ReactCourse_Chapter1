import './App.css';

import ToDoContainer from './components/ToDoContainer';
import PageTitle from './components/PageTitle';
function App() {
 

  return (
    <div className="app-container">
    <PageTitle title = "ToDo App"> </PageTitle>
    <ToDoContainer></ToDoContainer>
  </div>
  
  );
}

export default App;
