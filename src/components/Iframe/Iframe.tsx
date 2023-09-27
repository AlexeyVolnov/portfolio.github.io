import {FC} from "react";
import style from "../../style/Iframe.module.scss";


interface IIframeProps {
url:string
}


const Iframe: FC<IIframeProps> = ({url}) => {
  return (
       <iframe className={style.iframe} src={url}></iframe>
  )
}

export default Iframe