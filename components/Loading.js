import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center style={{display:"grid", placeItems:"center", height: "100vh"}}>
        <div>
            <img src = "https://static.cdnlogo.com/logos/w/29/whatsapp-icon.svg" alt="" 
            style={{marginBottom: 10}}
            height={200}
            />
            <Circle color="#3CBC2B" />
        </div>
    </center>
  )
}

export default Loading
