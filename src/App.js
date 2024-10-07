
import AppPersonal3 from './React-Interview-coding-practice/Project-Drag-And-Drop/PersonalApp.js';
import AppPersonal2 from './React-Interview-coding-practice/Project-Drag-And-Drop/PersonalApp.js';
import AppPersonal from './React-Interview-coding-practice/Project-File-Manager/Personal-App.js';
import AppPersonal1 from './React-Interview-coding-practice/Project-Pagination/Personal-App.js';
import ClassIndex from './React-Practice/Class-index.jsx';
import ClassIndex1 from './React-Practice/Class-index1.jsx';
import ClassPropsApp from './React-Practice/Class-props-app.jsx';
import ConditionalRender from './React-Practice/Conditional-rendering.jsx';
import FormHandleing from './React-Practice/Form-handling.jsx';
import FormValidation from './React-Practice/Form-validation.jsx';
import Index from './React-Practice/Fuction-index.jsx';
import Index1 from './React-Practice/Fuction-index1.jsx';
import FirstPropes from './React-Practice/Function-props.jsx';
import HideShowToggle from './React-Practice/Hide-show-toggle.jsx';
import InputBox from './React-Practice/InputBox.jsx';
import PassFunctionAsProps from './React-Practice/Pass-function-as-props.jsx';

function App() {

  const dataItem = [
    {name : 'Ankita', Email : 'a@a.com', Phoneno : 1234567890},
    {name :'Amisha', Email : 'am@a.com', Phoneno :3214567890}, 
    {name : 'Rameswar', Email : 'r@a.com', Phoneno : 5432167890}
  ] //function props example 
  return (
    <>
      <AppPersonal /> <br /> <br />
      <AppPersonal1 /> <br/> <br/>
      <AppPersonal2 /> <br/> <br/>
      {/* <AppPersonal3 /> <br/> <br/> */}
      <Index />  <br/> <br /> 
      <Index1 />  <br/> <br/>
      <ClassIndex />  <br/> <br/>
      <ClassIndex1 /> <br/> <br/>
      {/* <FirstPropes name = "Arpita"/> */}
      {
        dataItem.map((item, index) => {
          return(
            <FirstPropes key = {index}  name = {item.name} Email = {item.Email} Phoneno = {item.Phoneno}/>
          )
        })
      }
      
      <ClassPropsApp /> <br/> <br/>
      <InputBox /> <br/> <br/>
      <HideShowToggle /> <br/> <br/>
      <FormHandleing /> <br/> <br/>
      <ConditionalRender /> <br/> <br/>
      <FormValidation /> <br/> <br/>
      <PassFunctionAsProps /> <br/> <br/> 
    </>
  );
}

export default App;
