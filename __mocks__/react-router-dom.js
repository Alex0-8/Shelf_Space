import React from "react";

//ruta fija para todos los tests
const location = { pathname: '/' };

//mock de useLocation y useParams
function useLocation() {
  return location;
}
function useParams() {
  return { id: '' };
}

//memoryRouter y Link como passthrough
const Passthrough = ({ children }) => React.createElement(React.Fragment, null, children);

function Link({to, children}) {
  return React.createElement('a', { href: to }, children);
}

// Routes: renderiza sus hijos (Route components)
function Routes({ children }) {
  return React.createElement(React.Fragment, null, children);
}

// Route: renderiza sólo si path === location.pathname
function Route({ path, element }) {
  if (path === location.pathname) {
    return element;
  }
  return null;
}

module.exports = {
  MemoryRouter: Passthrough,
  Link,
  Routes,
  Route,
  useLocation,
  useParams,
};