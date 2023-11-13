//Los estilos css se pueden poner como si fueran objectos de js
//en vez de estilos en linea como se suele hacer cuando queres aplicar 
//estilos directamente en el html
//no es la forma recomendable de aplicar estilos, 
//usarlo solo cuando sea necesario aplicar un estilo en concreto para tu componente

import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


export function App () {

    const formattedUserName = <span>@usuario</span>

    return (
        <section className='App'>
            <TwitterFollowCard formattedUserName={formattedUserName} userName="pepe">
                Pepe Argento
            </TwitterFollowCard>
        </section>
    )
}