import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './routes/App';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App/>);