import { Container } from './styles'

import incomeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saidas.svg';
import total from '../../assets/Total.svg';


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

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saidas"/>
        </header>
        <strong>-R$15.000,00</strong>
      </div>

      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={total} alt="Total"/>
        </header>
        <strong>R$ 2.000,00</strong>
      </div>
    </Container>
  )
}
