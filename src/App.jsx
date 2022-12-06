import { Post } from "./components/Post";
import { Header } from "./components/Header"

import "./global.css"

export function App() {
  return(
    <div>
      <Header />
      <Post 
      author="Hugo Furtado"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aliquid nisi dignissimos, quasi omnis sapiente!"
      />
      <Post 
      author="Outro usuário"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aliquid nisi dignissimos, quasi omnis sapiente!"
      />
    </div>
  )
}