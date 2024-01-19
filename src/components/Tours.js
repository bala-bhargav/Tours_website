import Cards from './Cards.js';

function Tours({tours , removeTour}){

    return(<div>
<div>
<h2 style={{}}>plan with bala</h2>
</div>
<div style={{display:"flex",justifyContent:"center"}}>
<div style={{display:"grid",gridTemplateColumns: "repeat(2, 1fr)",gap:"20px 50px" }}>
    {
tours.map( (tours)=> {
return <Cards {...tours} removeTour={removeTour}> </Cards>
})
}

</div>
</div>

        </div>)
}
export default Tours;