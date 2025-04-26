import './App.css'
import CONTENT from './components/CONTENT'
import Footer from './components/Footer'
import Header from './components/Header'
import PageTitle from './components/PageTitle'

function App() {

  return (
    <div class="container">
     <Header/>   
     <PageTitle/>
     <CONTENT/>
     <Footer/>
    </div>
  )
}

export default App
