import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import s from "./header.css";

const Header: FunctionalComponent = () => {
    return (
        <header>
            <div className={s.banner}>PreactJS with TypeScript</div>
            <nav className={s.nav}>
                <Link activeClassName={s.nav__item_active} class={s.nav__item} href="/">
                    Home
                </Link>
                <Link activeClassName={s.nav__item_active} class={s.nav__item} href="/todo">
                    Todo
                </Link>
            </nav>
        </header>
    )
}

export default Header;