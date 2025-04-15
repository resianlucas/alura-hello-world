import styles from './NãoEncontrada.module.css';
import erro404 from 'assets/erro_404.png';

export default function NãoEncontrada() {
    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>
                    404
                </span>
                <h1 className={styles.titulo}>
                    Ops! Página não encontrada.
                </h1>
                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava procurando?
                </p>
                <p className={styles.paragrafo}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>
                <button className={styles.botaoContainer}>
                    Voltar
                </button>
                <img 
                    className={styles.imagemCachorro}
                    src={erro404}
                    alt='imagem de um cachorro'
                />
            </div>
            <div className={styles.espacoEmBranco}>
            </div>
        </>
    )
}