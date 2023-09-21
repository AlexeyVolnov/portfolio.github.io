import {FC, ReactNode, useState} from "react";
import style from './../../../style/accordeonIItem.module.scss'

interface IAccordeonItemProps {
  title: string,
  children: ReactNode
}


const AccordeonItem: FC<IAccordeonItemProps> = ({title, children}) => {
  const [active, setActive] = useState(false)

  const toggleHandler = () => setActive(prevState => !prevState)

  return (
     <div className={'w-full '} onClick={toggleHandler}>
       <div className={'flex justify-between  w-full'}>
         <div>{title}</div>
         <svg
            className={active ? 'rotate-90' : 'rotate-0'}
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 -960 960 960"
            width="20"
            fill={'#c7c7c7'}>
           <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
         </svg>
       </div>

       <div className={active ? `${style.active}` : `${style.noActive}`}>
         {children}
       </div>
     </div>
  )
}

export default AccordeonItem