import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '/font.css';
import './index.css';
import './App.jsx'
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/home' element={<App />} />
				<Route path='/' element={<Home/>} />
				<Route path='/login' element={<Login/>}/>
				<Route path={`*`} element={<NotFound/>} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);