import { AiTwotoneDelete } from "react-icons/ai";
function Card({title,dsc,dlt}){
    return<>
  
    <div className="savenote">
<div className="dlt" onClick={()=>{dlt(title)}}><AiTwotoneDelete/></div>
    <div>{title}</div>
    <div>{dsc}</div>
    </div></>
}
export default Card