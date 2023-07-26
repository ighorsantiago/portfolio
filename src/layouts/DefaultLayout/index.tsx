import { Outlet } from "react-router-dom";

import { Container } from "./styles";

import { Menu } from "../../components/Menu";
import { Header } from "../../components/Header";

export function DefaultLayout() {

    return (
        <Container>
            {/* <Menu /> */}
            <Header />
            <Outlet />
        </Container>
    );
}
