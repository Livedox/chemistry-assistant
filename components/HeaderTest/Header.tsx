import Link from "next/link";

export default function Header() {
    return(
        <header className="header">
            <Link href="./">
                <a className="header__logo-container">
                    <img src="/static/favicon.ico" alt="" className="header__logo" />
                    <h2 className="header__logo-name">Chemistry Assistant</h2>
                </a>
            </Link>
            <nav className="nav nav_middle">
                <Link href="./">
                    <a className="nav__link">
                        <img src="/static/img/cells.svg" alt="" className="nav__logo-link" />
                        <span className="nav__link-text">Таблица менделеева</span>
                    </a>
                </Link>
                <Link href="./table-solubility">
                    <a className="nav__link">
                        <img src="/static/img/cells.svg" alt="" className="nav__logo-link" />
                        <span className="nav__link-text">Таблица растворимости</span>
                    </a>
                </Link>
                <a className="nav__link">
                    <img src="/static/img/cells.svg" alt="" className="nav__logo-link" />
                    <span className="nav__link-text">Редактор химических формул</span>
                </a>
            </nav>
            <div className="nav">
                <a className="nav__link">
                    <img src="/static/img/cells.svg" alt="" className="nav__logo-link" />
                    <span className="nav__link-text">Калькулятор</span>
                </a>
                <a className="nav__link">
                    <img src="/static/img/cells.svg" alt="" className="nav__logo-link" />
                    <span className="nav__link-text">Помощь</span>
                </a>
                <a className="nav__link">
                    <img src="/static/img/cells.svg" alt="" className="nav__logo-link" />
                    <span className="nav__link-text">Настройки</span>
                </a>
            </div>        
        </header>
    )
}