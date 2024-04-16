import { Description } from '../Description';
import { Summary } from '../Summary';
import { Container } from './styles'

export function Dashboard() {
    return(
        <Container>
            <Summary />
            <Description />
        </Container>
    );
}