import { Outlet } from "react-router-dom";

import { Container } from "./styles";

import { Menu } from "../../compnents/Menu";
import { Header } from "../../compnents/Header";

export function DefaultLayout() {

    return (
        <Container>
            {/* <Menu /> */}
            <Header />
            <Outlet />
        </Container>
    );
}
