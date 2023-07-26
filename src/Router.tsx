import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import { Projects } from "./pages/Projects";
import { ProjectInfo } from "./pages/ProjectInfo";

export function Router() {

    return (
        <Routes>
            <Route path="/portfolio" Component={DefaultLayout}>
                <Route path="/portfolio" Component={Home} />
                <Route path="/portfolio/sobre" Component={About} />
                <Route path="/portfolio/contatos" Component={Contacts} />
                <Route path="/portfolio/projetos" Component={Projects} />
                <Route path="/portfolio/projetos/:title" Component={ProjectInfo} />
            </Route>
        </Routes>
    );
}
