import { Post } from "./components/Post";
import { Header } from "./components/Header"
import { Sidebar} from "./components/Sidebar"

import styles from "./App.module.css"
import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/HugoFur.png",
      name: "Hugo Furtado",
      role: "Web developer"
    },
    content: [
      { type: "paragraph", content:"Fala camaradas 👋"},
      {type: "paragraph", content:"Acabei de subir esse projeto frontend no meu portifolio. É um projeto que fiz durante as aulas do módulo de React da RocketSeat"},
      {type:"link", content:"https://github.com/HugoFur"}
    ],
    publishedAt: new Date("2022-12-12 12:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/HugoFur.png",
      name: "Hugo Furtado",
      role: "Web developer"
    },
    content: [
      { type: "paragraph", content:"Fala camaradas 👋"},
      {type: "paragraph", content:"Acabei de subir esse projeto frontend no meu portifolio. É um projeto que fiz durante as aulas do módulo de React da RocketSeat"},
      {type:"link", content:"https://github.com/HugoFur"}
    ],
    publishedAt: new Date("2022-12-12 12:00:00")
  },
];

export function App() {
  return(
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
       <main>
        {posts.map(post =>{
          return (
          <Post
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
          )
        })}
       </main>
      </div>
    </div>
  )
}