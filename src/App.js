import './App.css';
import Header from './Header/Header';
import Playlists from './Playlists/Playlists';
import Sidebar from './Sidebar/Sidebar';


function App() {

  return (
    <div className='Content'>
    <Header/>
    <Sidebar/>
    <Playlists/>
    </div>
       
  );
}

export default App;