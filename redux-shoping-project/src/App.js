import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./store/ui-slice";
let firstRender = true;

function App() {
  const cart=useSelector((state)=>state.cart)
  const dispatch = useDispatch()
  const notification = useSelector((state)=>state.ui.notification)
  

  useEffect(()=>{
    if(firstRender){
      firstRender=false;
      return
    }
    const sendRequest = async()=>{
      dispatch(uiActions.showNotification({
        type:"warning",
        open: true,
        message: "sending request to database"
      }))
      const res = await fetch('https://redux-http-56fd4-default-rtdb.firebaseio.com/cartitems.json',{
        method: "PUT",
        body: JSON.stringify(cart)
      })

      const data = await res.json()
      dispatch(uiActions.showNotification({
        type:"success",
        open: true,
        message: "sent request to database successfully"
      }))

    }
    
    sendRequest().catch(err=>{
      dispatch(uiActions.showNotification({
        type:"error",
        open: true,
        message: "request failed"
      }))
    });

  },[cart])
  

  const isLogedin = useSelector(state=>state.auth.isLogedin)
  console.log(isLogedin)
  return (
    <div className="App">
      {notification && <Notification type={notification.type} message={notification.message}/>}
      {!isLogedin && <Auth />}
      {isLogedin && <Layout />}
    </div>
  );
}

export default App;
