import {FC, useState} from "react";
import style from '../../style/card.module.scss'

interface ICardProps {

}


const Card: FC<ICardProps> = ({}) => {
  const [hover,setHover] = useState(false)
  const cardHandler = ()=>{
     setHover(prevState => !prevState)
  }
  const out = ()=>{
    setHover(prevState => !prevState)
  }
  return (
     <div onMouseEnter={cardHandler}  onMouseOut={out} className={style.card}>
       {hover && <div>dfdfdf</div>}
     </div>
  )
}

export default Card