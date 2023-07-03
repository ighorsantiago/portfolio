import styles from './Header.module.css';

export function Header() {

    function handleClick() {
        alert("Clicou!")
    }

    return (
        <header className={styles.header}>
            <button onClick={handleClick}>Home</button>
            <button onClick={handleClick}>Contatos</button>
            <button onClick={handleClick}>Projetos</button>
        </header>
    );
}
