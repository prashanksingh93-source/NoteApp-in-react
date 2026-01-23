import { useState ,useEffect} from 'react'
import Navbar from './component/NavBar'
import './App.css'
import Card from './component/Card'

function App() {
  const [note, setnote] = useState([])
  const[curntnote,setcurentnote]=useState({title:'',dsc:''})
  let handleSubmit=(e)=>{
    e.preventDefault()
    setnote([...note,curntnote])
    setcurentnote({title:'',dsc:''})
  }

  let handleChange=(e)=>{
    setcurentnote({...curntnote,[e.target.name]:e.target.value})
    console.log(curntnote)
  }

  return (<>
  <nav><Navbar></Navbar></nav>
  <main>
  <form onSubmit={handleSubmit}>
    <label htmlFor="title">title</label>
    <input type="text" id='title' value={curntnote.title} onChange={handleChange} name='title'/>
    <label htmlFor="dsc">discription</label>
    <textarea name="dsc" id="dsc" value={curntnote.dsc} onChange={handleChange}></textarea>
    <button>Submit</button>
    </form>
  </main>
  <div><h3>your note</h3></div>
  <section>
    <div className='container'>
    {note && note.map((e)=>{ return <Card title={e.title} dsc={e.dsc}/>})}
  </div>
  </section>


     
    
    </>)
}

export default App
