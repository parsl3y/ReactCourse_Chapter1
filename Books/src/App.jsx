import './App.css';
import BookContainer from './components/BookContainer';
import PageTitle from './components/PageTitle';
function App() {
 

  return (
    <div className="app-container">
    <PageTitle title = "Books App"> </PageTitle>
    <BookContainer></BookContainer>
  </div>
  
  );
}

export default App;
