import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contacts";
import { Projects } from "./pages/Projects";

export function Router() {

    return (
        <Routes>
            <Route path="/portfolio/" Component={DefaultLayout}>
                <Route path="/portfolio/" Component={Home} />
                <Route path="/portfolio/contatos" Component={Contacts} />
                <Route path="/portfolio/projetos" Component={Projects} />
            </Route>
        </Routes>
    );
}
