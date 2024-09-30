
import AppPersonal from './React-Interview-coding-practice/Project-File-Manager/Personal-App.js';
import ClassIndex from './React-Practice/Class-index.jsx';
import ClassIndex1 from './React-Practice/Class-index1.jsx';
import ClassPropsApp from './React-Practice/Class-props-app.jsx';
import Index from './React-Practice/Fuction-index.jsx';
import Index1 from './React-Practice/Fuction-index1.jsx';
import FirstPropes from './React-Practice/Function-propes.jsx';

function App() {

  const dataItem = [
    {name : 'Ankita', Email : 'a@a.com', Phoneno : 1234567890},
    {name :'Amisha', Email : 'am@a.com', Phoneno :3214567890}, 
    {name : 'Rameswar', Email : 'r@a.com', Phoneno : 5432167890}
  ] //function props example 
  return (
    <>
      <AppPersonal /> <br /> <br />
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
      
      <ClassPropsApp />
    </>
  );
}

export default App;
