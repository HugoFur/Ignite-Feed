import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.css"

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            
            <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1655413036324-c20022b4f361?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            alt="Imagem de fundo da barra lateral de usuário"
            />

            <div className={styles.profile}>
                
                <img 
                className={styles.avatar}
                src="https://avatars.githubusercontent.com/u/71742937?v=4" 
                alt="foto de perfil do usuário" 
                />
                
                <strong>Hugo Furtado</strong>
                <span>Web developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}