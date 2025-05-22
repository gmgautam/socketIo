import { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001", {
  autoConnect: false,
});
function App() {
   useEffect(() => {
    // ✅ Connect manually
    socket.connect();

    // ✅ Handle socket connect
    socket.on("connect", () => {
      console.log("✅ Connected with ID:", socket.id);
    });

    socket.on("gautam,",(msg)=>{
      console.log(msg)
    })

    // ✅ Clean up the event and disconnect on unmount
    return () => {
      socket.off("connect"); // remove event listener
      socket.disconnect();   // disconnect cleanly
    };
  }, []);
  
  console.log(socket, "socket socket");
  return <>hello ggfdsgsfdg</>;
}

export default App;
