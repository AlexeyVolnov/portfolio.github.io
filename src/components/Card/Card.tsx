import {FC} from "react";
import style from '../../style/card.module.scss'
import ICardItem from "../../type/ICardItem.ts";
import {useAppDispatch} from "../../hooks/hooks.ts";
import {iframeLink} from "../../store/itemsSlice.tsx";
import githubIcon from "./../../images/cardIcons/iconsGithub.png"

interface ICardProps {
  item: ICardItem
}


const Card: FC<ICardProps> = ({item}) => {

  const Dispatch = useAppDispatch()

  const iframeHandler = () => Dispatch(iframeLink(item.githubLink))


  return (
     <div className={style.card}>

       <img className={style.cardBG} src={item.url} alt=""/>

       <div className={style.cardContent}>
         <h5 className={'text-2xl my-5 text-cyan-100'}>{item.title}</h5>
         <div className={style.text}>
           {item.text}
         </div>
        <div className={'flex flex-col gap-5 items-center'}>
          <a className={'flex gap-3 mt-10 items-center'} target={'_blank'} href={item.githubLink}>
            <img className={'w-[40px]'} src={githubIcon} alt=""/>
            <p className={'text-cyan-100 text-[1.1rem]'}>Посмотреть код на GitHub : <span className={'text-cyan-50 text-[1rem]'}>{item.githubLink}</span></p>
          </a>
          <button onClick={iframeHandler} className={style.buttonPrewiew}>Посмотреть проект</button>
        </div>
       </div>
     </div>
  )
}

export default Card