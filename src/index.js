import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.scss';
import '@fontsource/arvo';
import '@fontsource/comfortaa';
import '@fontsource/antonio';
import '@fontsource/asap';

const App = lazy(() => import('./App'));

ReactDOM.render(<Suspense fallback={<h1>Loading...</h1>}><App/></Suspense>, document.getElementById('root'));