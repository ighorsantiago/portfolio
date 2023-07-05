import { Outlet } from "react-router-dom";

import { Container } from "./styles";

import { Menu } from "../../compnents/Menu";

export function DefaultLayout() {

    return (
        <Container>
            <Menu />
            <Outlet />
        </Container>
    );
}
