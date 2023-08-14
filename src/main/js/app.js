const React = require('react');
const ReactDOM = require('react-dom');
const { createBrowserRouter, RouterProvider } = require('react-router-dom');

const PageHome = require('./pages/home');
const PageNuevoMusico = require('./pages/nuevo-musico');
const PageEditarMusico = require('./pages/editar-musico');
const PageEditarInstrumento = require('./pages/editar-instrumento');
const PageNuevoInstrumento = require('./pages/nuevo-instrumento');
const PageNuevaBanda = require('./pages/nueva-banda');
const VerBandaPage = require('./pages/ver-banda');
const NuevoIntegrantePage = require('./pages/nuevo-integrante');



const router = createBrowserRouter([
	{ path: '/', element: <PageHome /> },
	{ path: '/nuevo-musico', element: <PageNuevoMusico /> },
	{ path: '/editar-musico/:id', element: <PageEditarMusico /> },
	{ path: '/editar-instrumento/:id', element: <PageEditarInstrumento />},
	{ path: '/nuevo-instrumento', element: <PageNuevoInstrumento />},
	{ path: '/nueva-banda', element: <PageNuevaBanda />},
	{ path: '/ver-banda/:id', element: <VerBandaPage />},
	{ path: '/ver-banda/:id/nuevo-integrante', element: <NuevoIntegrantePage /> }
]);


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react')
)