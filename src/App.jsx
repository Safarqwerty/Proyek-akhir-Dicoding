import './App.css'
import Header from './Components/Header'
// eslint-disable-next-line no-unused-vars
// import Search from './components/Search'
import Notes from './Components/Notes'


function App() {

  return (
    <div className='main'>
      <Header />
      {/* <Search handleSearchNote={setSearchText} /> */}
      <Notes 
        // notes={notes.filter((note) =>
        //   note.text.toLowerCase().includes(searchText)
        // )}
      />
    </div>
  )
}

export default App
