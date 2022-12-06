import { Post } from "./Post";

export function App() {
  return(
    <div>
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