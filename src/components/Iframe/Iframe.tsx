import {FC} from "react";
import style from "../../style/content.module.scss";


interface IIframeProps {
url:string
}


const Iframe: FC<IIframeProps> = ({url}) => {
  return (
     <div>
       <iframe className={style.iframe} src={url}></iframe>
     </div>
  )
}

export default Iframe