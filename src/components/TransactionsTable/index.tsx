import { Container } from './styles'

export function TransactionsTable(){
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className='deposit'>R$12.000,00</td>
            <td>Venda</td>
            <td>13/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>-R$3.000,00</td>
            <td>Casa</td>
            <td>13/02/2021</td>
          </tr>

        </tbody>

      </table>
    </Container>
  )
}
