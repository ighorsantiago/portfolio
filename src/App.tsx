import './global.css';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contacts } from './pages/Contacts';

export function App() {

  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Contacts />
      </main>
    </>
  )
}
