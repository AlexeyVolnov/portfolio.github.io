import {FC} from "react";
import style from './../../style/content.module.scss'
import Card from "../Card/Card.tsx";
import {useAppSelector} from "../../hooks/hooks.ts";

interface IContentProps {

}


const Content: FC<IContentProps> = ({}) => {

const cards = useAppSelector(state=>state.itemsSlice.items)


  return (
     <div className={style.content}>
       {cards.map(card=><Card key={card.id} item={card}/>)}
     </div>
  )
}

export default Content