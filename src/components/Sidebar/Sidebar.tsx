import {FC, useState} from "react";
import style from './../../style/sidebar.module.scss'
import Iframe from "../Iframe/Iframe.tsx";
import Content from "../Content/Content.tsx";


interface ISidebarProps {

}


const Sidebar: FC<ISidebarProps> = ({}) => {
  const [activeMenu, setActiveMenu] = useState(false)
  const menuHandler = () => setActiveMenu(prevState => !prevState)
  return (
     <div className={`${style.wrapper} ${activeMenu?style.activeWrapper:''}`}>
       <div className={`${activeMenu?style.topLineActive:''} ${style.topLine}`}></div>
       <div className={`${style.sidebar} ${activeMenu?style.minimize:''}`}>
         <div className={`${style.sidebarInner} ${activeMenu?style.activeInner:''}`}>
           <div onClick={menuHandler} className={`${style.menu} ${activeMenu?style.activeMenu:''}`}>меню</div>
           {!activeMenu && <Content/>}
         </div>
       </div>
       <div className={`${style.content} ${activeMenu?style.activeContent:''}`}>
           <Iframe url={'https://alexeyvolnov.github.io/layout_Outdoor/'}/>
       </div>
     </div>

  )
}

export default Sidebar