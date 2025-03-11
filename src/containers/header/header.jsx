import style from './header.module.css';

export default function Header() {
    return (
        <header className={style.header}>
            <img src='/della.png' alt='Image de Della Duck' />
            <span>Exercice 02 - Les collections</span>
        </header>
    );
}