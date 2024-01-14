import React from 'react'
import {Link} from "react-router-dom";

const NotFound = () => {
	return (
		<div className={`w-screen h-screen flex items-center justify-center`}>
		<div className={`w-[300px] sm:w-[400px] md:min-w-[600px] lg:w-[800px] h-64 rounded-md m-auto border border-gray-400 shadow text-slate-900 p-5 text-center`}>
			<h1 className={`text-[56px] font-bold text-center`}>404</h1><p className={`text-xl text-center`}>Page Not Found</p>
			<p>Please Check your address bar or <Link to={'/home'} className={`text-violet-500 `}>click me!</Link></p>
		</div>
		</div>
	)
}
export default NotFound
