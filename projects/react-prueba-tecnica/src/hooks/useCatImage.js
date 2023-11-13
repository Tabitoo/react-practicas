import { useState, useEffect } from 'react'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

// los custom hook se usan para reutilizar logica de los componentes
// es una forma de refactorizar codigo, ya que nos vamos a encontrar
// con codigo que se puede repetir en los componentes, en este caso es de mostrar la imagen
// por eso lo que hacemos es meter la logica en un custom hook para usarlo en los componentes que
// queramos. La diferencia de un custom hook y una funcion, es que en los customs hooks podemos usar otros hooks
// por ejemplo el useState, ya que va a generar los hooks en cada componente que se use el custom hook.
export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ', 3).join()

    fetch(`https://cataas.com/cat/says/${firstWord}?size=50%color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
