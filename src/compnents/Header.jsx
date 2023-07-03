import { Button, Container } from './Header.styles';

export function Header() {

    function handleClick() {
        alert("Clicou!")
    }

    return (
        <Container>
            <Button onClick={handleClick}>Home</Button>
            <Button onClick={handleClick}>Contatos</Button>
            <Button onClick={handleClick}>Projetos</Button>
        </Container>
    );
}
