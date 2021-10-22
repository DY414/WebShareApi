import "./App.css";
import TextField from "@material-ui/core/TextField";
import React, { useState , useEffect } from "react"
import { Button, StylesProvider } from "@material-ui/core";
import { db } from "./firebase_config";
import firebase from "firebase";
import TodoListItem from "./Todo";
import {ListItem, ListItemText} from "@material-ui/core";

function App() {

  // const [doings,setDoings] = useState([]);
  // const [todoInput, setTodoInput] = useState("");

  // useEffect(() => {
  //   getDoings();
  // }, []); // 빈배열은 처음 리렌더링에만 실행된다.

  // function getDoings() {
  //   db.collection("doings").onSnapshot(function (querySnapshot) {
  //     console.log(querySnapshot)
  //     setDoings(
  //       querySnapshot.docs.map((doc)=> ({
  //         id: doc.id,
  //         doing: doc.data().doing,
  //         inprogress: doc.data().inprogress,
  //         timestamp: doc.data().timestamp,
  //       }))
  //     );
  //   });
  // }

  // function addDoing(e) {
  //   e.preventDefault();

  //   db.collection("doings").add({
  //     inprogress: true,
  //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //     doing: todoInput,
  //   });

  //   setTodoInput("");
    
  // }

  
  const handleSharing = async () => {
    if(navigator.share){

        try{
            await navigator.share({
                    title: '링크를 저장해두고, 준비되는 대로 다시 만나요!',
                    url: 'http://webtoon.today/landing#Submit'
                })
            console.log("성공했습니다")
        } catch (error) {
            console.log(`Error: ${error}`);
        };
        console.log("this is not supported here")
    }
  };
  
  return (



    <div>
      {navigator.share?
      <>
          <div className={"DialogArea share-button"} onClick={handleSharing}>
              <div>{"!"}</div>
              <div className={"DialogText"}>{"앗. 지금은 원고가 없어요"}</div>
          </div>
      </>
      :<></>
      }
    </div>
    // <div className="App">
    //   <div 
    //     style={{
    //       display: "flex",
    //       flexDirection: "column",
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <h1>Memo by dy day by day</h1>
    //     <form>
    //       <TextField 
    //         id="Standard" 
    //         label="Writhe a Doing" 
    //         // variant="filled"
    //         value={todoInput}
    //         onChange={(e) => setTodoInput(e.target.value)}
    //       />
    //       <button
    //         className="css1" 
    //         type="submit" 
    //         variant="contained" 
    //         onClick={addDoing} 
    //         color="primary"
    //         // style={{ display: "none"}}
    //       >
    //         Add
    //       </button>
    //     </form>
      
    //     <div 
          
    //       style={{ width: "90vw", maxWidth: "500px", marginTop: "24px" }}
    //     >
    //       {doings.map((row) => {  // 여기서 doing는 js line 20~24를 말함 id doing inprogress
    //         return (
    //           function TodoListItem({ doing, inprogress, id}) {

    //             function toggleInProgress() {
    //               db.collection("doings").doc(id).update({
    //                 inprogress: !inprogress,
    //               });
    //             }
              
    //             function deleteTodo() {
    //               db.collection("doings").doc(id).delete();
    //             }
              
    //             return (
    //               <div style={{ display: "flex" }}>
    //                 <ListItem>
    //                   <ListItemText 
    //                     primary={doing}
    //                     secondary={inprogress ? "In Progress" : "Completed"} 
    //                   />
    //                 </ListItem>
              
    //                 <Button onClick={toggleInProgress}>
    //                   {inprogress ? "Done" : "UnDone"}
    //                 </Button>
    //                 <Button onClick={deleteTodo}>X</Button>
    //               </div>
    //             );
    //           }
              // <div>
              //   <div>
              //     <ul>
              //       <li>{row.doing}</li>
              //       <li>{row.inprogress ? "Dong" : "UnDone"}</li>
              //     </ul>
              //   </div>
              //   <div>
              //     {row.id}
              //   </div>
              // </div>
    //         )          
    //     })}
    //     </div>
    //   </div>
    // </div>
  )
}

export default App;
