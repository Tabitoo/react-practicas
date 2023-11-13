import { Square } from "./Square.jsx"

export function WinnerModal({winner, resetGame}) {

    if(winner == null) return null

    const winnerText = winner == false ? "Empate" : "Gano";

    return (
        //se genera un renderizado condicional
        // el && se utiliza como atajo cuando queres renderizar algo solo si la condicion es verdadera
        // se puede leer como si winner es distinto de null, entonces (&&) renderiza el section
        //ahora se comenta porque lo estamos exportando, y ademas cambiamos la logica
        //winner != null && (
        <section className="winner">
            <div className="text">
                <h2>{winnerText}</h2>

                <header className="win">
                {winner && <Square>{winner}</Square>}
                </header>

                <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>

            </div>

        </section>
    )
          
    
}