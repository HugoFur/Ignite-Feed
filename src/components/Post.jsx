import styles from "./Post.module.css"

export function Post(){
    return (
        <article className={styles.post}>
            
            <header>
                <div className={styles.author}>
                    <img 
                    className={styles.avatar}
                    src="https://avatars.githubusercontent.com/u/71742937?v=4"
                    alt="Foto de perfil do usuário"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Hugo Furtado</strong>
                        <span>Web developer</span>
                    </div>
                </div>

                <time dateTime="2022-12-08 11:10:15">Publicado há 1h</time>
            </header>
        
            <div className={styles.content}>
                <p>Fala camaradas 👋</p>
                <p>Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare</p>
                <p><a href="">site.com</a></p>
                <p><a href="">#novoprojeto #RocketSeat</a></p>
            </div>
        </article>
    )
}