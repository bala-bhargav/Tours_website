import { useState } from "react";
function Cards({id ,image,info,price,name, removeTour} ) {

    function readmorehandler(){
        setreadmore(!readmore);
    }
    const [readmore,setreadmore]=useState(false); 
    const description = readmore ? info : `${info.substring(0,200)}....`
return(<div style={{height:"600px",width:"500px",backgroundColor:"#865fcf",display:"flex",flexDirection:'column',justifyContent:"space-around"}}>
<div className="cards" display={{height:"270px",width:"500px"}} >
    <img style={{height:"200px",width:"200px",}} src={image} alt="bhargav" className="image"></img>
<div className="tour-details">
<h4 className="tour-price" style={{height:"30px",width:"500px",color:"white",display:"flex",alignItems:"center",justifyContent:'center',fontSize:"20px"}}>{price}</h4>
<h4 className="tour-name" style={{height:"30px",width:"500px",color:"white",display:"flex",alignItems:"center",justifyContent:'center',fontSize:"30px"}}>{name}</h4>

</div>
<div className="description" style={{height:"150px",width:"500px",color:"white",fontSize:"20px"}}>
{description}
<span className="read-more" style={{color:"black",fontSize:"23px"}} onClick={readmorehandler}>
    {readmore ?'showless ' : 'read more'}
</span>
</div>
</div>
<div style={{display:"flex",justifyContent:"center"}}>
<button style={{height:"20px",width:"100px"}} className="btn-red" onClick={ () =>removeTour(id)}>Not intrested </button>
</div>
</div>
)


}
export default Cards;