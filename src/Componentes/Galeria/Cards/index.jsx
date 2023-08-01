import React from 'react'
import open from './open.png'
import favorito from './favorito.png'
import Card from './Card'

export default function Cards({itens, styles}) {
  return (
    <ul className={styles.galeria__cards}>
          {itens.map((item) => {
            return(
              <Card 
                key={item.id}
                item={item}
                open={open}
                favorito={favorito}
                styles={styles}
              />
            )
          })}
        </ul>
  )
}
