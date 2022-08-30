import Titulo from '../Titulo/Titulo'
import Paragrafo from '../Paragrafo/Paragrafo'
import image from '../../assets/simarinha.webp'

import './card.styles.css'

function Card() {
  return(
    <div className="card-container">
      <img className="imagem" src={image} alt="ilustracao de mulher preta usando computador" />
      <Titulo />
      <Paragrafo />
    </div>
  )
}
export default Card