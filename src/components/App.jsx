import { useState } from 'react'
import '../scss/App.scss'
import Header from './Header'
// import Filters from './Filters'
import QuotesList from './QuotesList'
import dataPhrases from '../data/phrases.json'

function App() {

  const [phrases] = useState(dataPhrases);
  console.log(phrases);
  return (
    <div>
      <Header></Header>
      <main>
        {/* <Filters></Filters> */}
        <QuotesList phrases={phrases}>

        </QuotesList>
      </main>
    </div>
  )
}

export default App;
