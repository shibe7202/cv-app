import './App.css'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Experience from './components/Experience'
import './styles.css'

function App() {
  return (
    <>
      <h1 className='cv-header'>CV App</h1>
      <GeneralInfo/>
      <Education/>
      <Experience/>
    </>
  )
}

export default App
