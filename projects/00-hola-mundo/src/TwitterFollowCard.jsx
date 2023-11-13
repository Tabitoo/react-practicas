// El useState es un hook de react, los hooks nos permiten interactuar de diferentes formas con los componentes
import { useState } from "react";

export function TwitterFollowCard({children, formattedUserName, userName}) {

    //El useState nos permite guardar el estado de un componente en una variable
    //Al usar el userState, este nos devuelve un array con dos valores, el primero es el estado de la variable
    //y el segundo es una funcion que nos permite cambiar el estado de dicha variable.
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassNmae = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
    <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img
                className="tw-followCard-avatar"
                src="https://unavatar.io/github/37t?fallback=https://avatars.githubusercontent.com/u/66378906?v=4" alt="Avatar random" />
            <div className="tw-followCard-info">
                <strong>{children}</strong>
                <span className="tw-followCard-infoUserName">{formattedUserName}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClassNmae} onClick={handleClick}>
                {text}
                <span className="tw-followCard-stopFollow">Dejar de seguir</span>
            </button>
        </aside>
    </article>
)
}