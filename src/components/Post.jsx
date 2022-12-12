import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post() {
    return (
        <article className={styles.post}>

            <header>
                <div className={styles.author}>
                    <Avatar src="https://avatars.githubusercontent.com/u/71742937?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Hugo Furtado</strong>
                        <span>Web developer</span>
                    </div>
                </div>

                <time dateTime="2022-12-08 11:10:15">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala camaradas 👋</p>
                <p>Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>
                    <a href="">site.com</a>
                </p>
                <p>
                    <a href="">#novoprojeto</a>{'  '}
                    <a href="">#RocketSeat</a>{'  '}
                    <a href="">#devFrontend</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Deixe um comentario..."
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}