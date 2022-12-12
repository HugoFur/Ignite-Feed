import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"

export function Comment({content, onDeleteComment}) {

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/lflinhares.png" alt="" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Luiz Fernando Linhares</strong>
                            <time dateTime="2022-12-08 11:10:15">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentarios">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>21</span>
                    </button>
                </footer>
            </div>
        </div>
    )
} 