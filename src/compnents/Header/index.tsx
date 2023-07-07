import { useState } from 'react'

import { Container, Logo, Nav } from './styles';

export function Header() {

    const reactLogo = '../../assets/react.svg';
    const [bar, setBar] = useState(false);

    return (
        <Container bar={bar}>
            <Logo>
                <img src={reactLogo} />
                <h1>PORTFÓLIO</h1>
            </Logo>
            <Nav bar={bar}>
                <span><a href="/portfolio">Home</a></span>
                <span><a href="/portfolio/projetos">Projects</a></span>
                <span><a href="/portfolio/contatos">Contatos</a></span>
            </Nav>
            <div
                onClick={() => setBar(!bar)}
                className="bars">
                <div className="bar"></div>
            </div>
        </Container>
    )
}
