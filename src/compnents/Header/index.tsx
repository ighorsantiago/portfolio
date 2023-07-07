import { useState } from 'react'

import { Container, Logo, Nav } from './styles';

import reactLogo from '../../assets/react.svg';
import { Link } from 'react-router-dom';

export function Header() {

    const [bar, setBar] = useState(false);

    return (
        <Container bar={bar}>
            <Logo>
                <img src={reactLogo} style={{ width: 30, height: 30, marginRight: 15 }} />
                <h1>PORTFÓLIO</h1>
            </Logo>
            <Nav bar={bar}>
                <span><Link to="/portfolio">Home</Link></span>
                <span><Link to="/portfolio/projetos">Projetos</Link></span>
                <span><Link to="/portfolio/contatos">Contatos</Link></span>
            </Nav>
            <div
                onClick={() => setBar(!bar)}
                className="bars"
            >
                <div className="bar"></div>
            </div>
        </Container>
    )
}
