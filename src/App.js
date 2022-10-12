import {Routes,Route} from 'react-router-dom'
import Contacts from './components/contacts';
import Add from './components/add';
import Edit from './components/edit'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Contacts/>} />
        <Route path='/add' element={<Add/>} />
        <Route path ='/edit/:id' element= {<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
