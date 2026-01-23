import { useState ,useEffect} from 'react'
import Navbar from './component/NavBar'
import './App.css'
import Card from './component/Card'
import { MdOutlineDoneOutline } from "react-icons/md";

function App() {
  const [note, setnote] = useState([])
  const[curntnote,setcurentnote]=useState({title:'',dsc:''})

  useEffect(()=>{
    let storage=localStorage.getItem('note')
    if(storage){
      setnote(JSON.parse(storage))
    }
  },[])

  let handleSubmit=(e)=>{
    e.preventDefault()
    setnote([...note,curntnote])
    setcurentnote({title:'',dsc:''})
    localStorage.setItem('note',JSON.stringify([...note,curntnote]))
  }

  let handleChange=(e)=>{
    setcurentnote({...curntnote,[e.target.name]:e.target.value})
    
  
  }

  let dltnote=(title)=>{
    setnote(note.filter(item=>item.title != title))
     localStorage.setItem('note',JSON.stringify(note.filter(item=>item.title!= title)))
     console.lod(note)
  }

  return (<>
  <nav><Navbar></Navbar></nav>
  <main>
  <form onSubmit={handleSubmit}>
 <label htmlFor="title">title</label>
  <input type="text" id='title' value={curntnote.title} onChange={handleChange} name='title'/>
  <label htmlFor="dsc">discription</label>
  <textarea name="dsc" id="dsc" value={curntnote.dsc} onChange={handleChange}></textarea>     <div> <button><MdOutlineDoneOutline /></button></div>
     </form>
  </main>
  <div><h3>your note</h3></div>
  <section>
    <div className='container'>
   {note && note.map((e)=>{ return <Card key={e.title} dlt={dltnote} title={e.title} dsc={e.dsc}/>})}
  </div>
  </section>


     
    
    </>)
}

export default App
