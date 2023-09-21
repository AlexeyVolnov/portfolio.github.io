import {FC} from "react";
import style from './../../style/content.module.scss'
import Card from "../Card/Card.tsx";

interface IContentProps {

}


const Content: FC<IContentProps> = ({}) => {

  const cards = [{}]


  return (
     <div className={style.content}>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
     </div>
  )
}

export default Content