import { EVENTS } from "./const.js"
import { useState, useEffect } from "react"
import PropTypes from 'prop-types'

export function Router({ routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
  
    useEffect(() => {
      const onLocationChange = () => {
        setCurrentPath(window.location.pathname)
      }
  
      window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.addEventListener(EVENTS.POPSTATE, onLocationChange)
  
      return () => {
        window.removeEventListener(EVENTS.PUSHSTATE)
        window.addEventListener(EVENTS.POPSTATE, onLocationChange)
      }
    }, [])
  
    const Page = routes.find(({ path }) => path === currentPath)?.Component
    return Page ? <Page /> : <DefaultComponent />
  
  }
  
Router.propTypes = {
    routes: PropTypes,
    defaultComponent: PropTypes
}  