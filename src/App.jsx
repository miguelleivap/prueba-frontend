import Menu from '/src/Components/views/menu/Menu.jsx';
import Header from './Components/views/header/Header.jsx';
import Body from './Components/views/body/body.jsx';
import './App.css'

function App() {

  return (
    <div className='app-container'>
      <Menu />
      <div className='content-page'>
        <Header />
        <Body />
      </div>
    </div>
  )
}

export default App
