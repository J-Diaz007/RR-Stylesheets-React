import './App.css';
import SearchBar from './Components/SearchBar';
import UserGallery from './Components/UserGallery';

const appStyle = {
  'background-color': '#a6a6a6',
  'min-height': '100vh'
}

const SearchBar

function App() {
  return (
    <div className='App' style={appStyle}>
      <SearchBar />
      <UserGallery />  
    </div>
  );
}

export default App;
