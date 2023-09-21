import {FC} from "react";
import style from './../../style/content.module.scss'

interface IContentProps {

}


const Content: FC<IContentProps> = ({}) => {
  return (
     <div className={style.content}>
       <div className={'border-2 border-b-amber-950'}>33</div>
       <div className={'border-2 border-b-amber-950'}>1</div>
       <div className={'border-2 border-b-amber-950'}>2</div>
       <div className={'border-2 border-b-amber-950'}>3</div>
       <div className={'border-2 border-b-amber-950'}>4</div>
       <div className={'border-2 border-b-amber-950'}>5</div>
     </div>
  )
}

export default Content