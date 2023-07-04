import { Link } from 'react-router-dom';

import { Container, Button } from './styles';

export function Header() {

    function handleClick() {
        alert("Clicou!")
    }

    return (
        <Container>
            <Button to={"/portfolio/"}>Home</Button>
            <Button to={"/portfolio/contatos"}>Contatos</Button>
            <Button to={"/portfolio/projetos"}>Projetos</Button>
        </Container>
    );
}
