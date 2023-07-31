import './App.css'
import { Router } from './Router.jsx'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'

const appRoutes = [{
  path: '/',
  Component: HomePage
},
{
  path: '/about',
  Component: AboutPage
}]

function App() {

  return (
    <>
      <main>
        <Router routes={appRoutes} />
      </main>
    </>
  )
}

export default App
