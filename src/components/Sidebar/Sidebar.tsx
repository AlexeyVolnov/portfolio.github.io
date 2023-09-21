import {FC, useState} from "react";
import style from './../../style/sidebar.module.scss'


interface ISidebarProps {

}


const Sidebar: FC<ISidebarProps> = ({}) => {

  const [activeMenu, setActiveMenu] = useState(false)


  const menuHandler = () => {
    setActiveMenu(prevState => !prevState)

  }
  return (
     <div className={`${style.wrapper} ${activeMenu?style.activeWrapper:''}`}>
       <div className={`${activeMenu?style.topLineActive:''} ${style.topLine}`}></div>
       <div className={`${style.sidebar} ${activeMenu?style.minimize:''}`}>
         <div className={`${style.sidebarInner} ${activeMenu?style.activeInner:''}`}>
           <div onClick={menuHandler} className={`${style.menu} ${activeMenu?style.activeMenu:''}`}>меню</div>

         </div>
       </div>
       <div className={`${style.content} ${activeMenu?style.activeContent:''}`}>
         <div className={'border-2 border-b-amber-950'}></div>
         <div className={'border-2 border-b-amber-950'}>1</div>
         <div className={'border-2 border-b-amber-950'}>2</div>
         <div className={'border-2 border-b-amber-950'}>3</div>
         <div className={'border-2 border-b-amber-950'}>4</div>
         <div className={'border-2 border-b-amber-950'}>5</div>
       </div>
     </div>

  )
}

export default Sidebar