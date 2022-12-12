import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"

export function Comment() {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/HugoFur.png" alt="" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Hugo Furtado</strong>
                            <time dateTime="2022-12-08 11:10:15">Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentarios">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Parabéns, o site ficou otimo!</p>
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