function EventExample() {
    function handle1(){
        alert("Handle-1");
    }

    return (
    <>
    <div>EventExample</div>
    <button onClick={handle1}>CLICK-1</button>
    <button onMouseOver={()=>{alert("Handle-2");}}>CLICK-2</button>
    </>
  )
}

export function add(){
    return 10+20;
}
export function sub(){
    return 10-20;
}
export default EventExample;