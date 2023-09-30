import {createSlice} from "@reduxjs/toolkit";
import ICardItem from "../type/ICardItem.ts";



const items:ICardItem[] = [
  {
    id:1,
    url: "/Outdoor.jpg",
    title: "О проекте",
    text: "45454",
    githubLink:"https://alexeyvolnov.github.io/Outdoor.github.io/"
  },
  {
    id:2,
    url: "/Countries.jpg",
    title: "О проекте",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aliquid atque culpa debitis dolor\n" +
       "           dolores ducimus eaque earum error molestiae odio, possimus repellendus sed sequi totam ullam unde\n" +
       "           voluptate?",
    githubLink:"https://alexeyvolnov.github.io/countries.github.io/"
  },
  {
    id:3,
    url: "/Gazprom.jpg",
    title: "О проекте",
    text: "45454",
    githubLink:"https://oblgaz56.ru/"
  },
  {
    id:4,
    url: "/oblgaz_magazin.jpg",
    title: "О проекте",
    text: "45454",
    githubLink:"https://gss56.ru/about/contacts/"
  },

]


const initialState = {
  items,
  activeIframe:'',
}





const itemsSlice = createSlice({
  name:'items',
  initialState,
  reducers:{
     iframeLink(state,action){
         state.activeIframe = action.payload
     }
  }
})



export const {iframeLink} = itemsSlice.actions

export default itemsSlice.reducer