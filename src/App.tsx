import './App.css'
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import Content from "./components/Content/Content.tsx";


function App() {


  return (
     <div className={'flex'}>
       <div>
         <Sidebar/>
       </div>
      <div>
        <Content/>
      </div>

     </div>
  )
}

export default App
