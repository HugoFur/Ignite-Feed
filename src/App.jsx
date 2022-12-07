import { Post } from "./components/Post";
import { Header } from "./components/Header"
import { Sidebar} from "./components/Sidebar"

import styles from "./App.module.css"
import "./global.css"

export function App() {
  return(
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
       <main>
        <Post 
        author="Hugo Furtado"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aliquid nisi dignissimos, quasi omnis sapiente!"
        />
       </main>
      </div>
    </div>
  )
}