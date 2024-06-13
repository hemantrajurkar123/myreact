import React from "react";
// import Child from "./Child";
import { useState,createContext } from "react";
// import ChildComponent from './ChildComponent'
import FormikTest from "./FormikTest";
import './App.css'
import FormikFormTest from "./FormikFormTest";
import FunctionReturnTest from "./FunctionReturnTest";
import Recipients from "./Recipients";
import RecipientsNew from "./RecipientsNew";
import Animals from "./Animals";
import ParentComponent from "./ParentComponent";
import ImageMain from "./components/ImageMain";
import UsersMain from "./newcomponents/usersMain";
import UsersHome from "./usercomponents/UsersHome";
import UserHomeNew from "./usercomponents-new/UserHomeNew";
import BlogHome from "./blogcomponents/BlogHome";
import Variables from "./typescript_tutorial/Variables";
import TsFunctions from './typescript_tutorial/TsFunctions'
import UserHome from "./user-components-practice/UserHome";
import UserList from "./user-component-practice1/UserList";
import UserList2 from "./user-components-practice2/UserList2";

const UserDataContext = createContext();


const App = () => {
// const [name,setName]=useState("Hemant")
// const [location,setLocation]=useState("Pune")
// const data={
//   name,
//   location,
//   setName,
//   setLocation
// }

// const getNewResult = () => {
//   console.log("ABCD")
//   return 'ABCD' // Returning a string instead of JSX
// }

// console.log(data)
  return (
    // <UserDataContext.Provider value={data}>
      <div>
        <h3>App Component</h3>
        {/* <Child /> */}
        {/* <ChildComponent getNewResult={getNewResult} /> */}
        {/* <FormikTest /> */}
        {/* <FormikFormTest /> */}
        {/* <FunctionReturnTest /> */}
        {/* <Recipients /> */}
        {/* <RecipientsNew /> */}
        {/* <Animals/> */}
        {/* <ParentComponent /> */}
        {/* <ImageMain /> */}
        {/* <UsersMain /> */}
        {/* <UsersHome /> */}
        {/* <UserHomeNew /> */}
        {/* <BlogHome /> */}
        {/* <Variables /> */}
        {/*<TsFunctions /> */}
        {/* <UserHome /> */}
        {/* <UserList /> */}
        <UserList2 />
      </div>
    // </UserDataContext.Provider>
  );
};

export default App;
export {UserDataContext}
