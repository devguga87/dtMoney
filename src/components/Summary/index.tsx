import { Container } from './styles'

import incomeImg from '../../assets/Entradas.svg';

export function Summary(){
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas"/>
        </header>
        <strong>R$ 17.000,00</strong>
      </div>
    </Container>
  )
}
