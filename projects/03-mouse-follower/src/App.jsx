import { useEffect, useState } from "react"


function App() {

  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0  });



  //El useEffect es un hook que nos permite ejecutar el codigo que queramos cuando se renderiza por primera vez
  //un componente y cuando una dependencia se actualiza, la dependencia se refiere a por ejemplo una variable
  //de un estado, u otra cosa que pueda cambiar su valor dependenciendo de 'x' accion.
  useEffect(() => {
    console.log("Efecto")

    const handleMove = (event) => {
      const {clientX, clientY} = event;
      setPosition({x: clientX, y: clientY});

    }


    if(enabled){

      window.addEventListener('pointermove', handleMove);

    }

    //Siempre que se use algun efecto, por ejemplo algun addEventListener, tenes que limpiar ese efecto
    //cuando el useEffect se vuelva a ejecturar, ya sea porque se actualizo una dependecia o se borro un componente
    //en este caso lo que estamos haciendo es desuscribirnos del evento handleMove.

    //Como se ve en el codigo, lo que retornamos es una funcion que se va a utilizar cuando se actualize 
    //una dependencia o se borre el componente
    return () => {
      window.removeEventListener('pointermove', handleMove);
    }

  }, [enabled])
  
  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#89f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}>

      </div>
      <h1>proyecto</h1>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </main>
  )
}

export default App
