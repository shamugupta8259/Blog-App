import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import FooterCom from "./Components/FooterCom";
import Projects from "./Pages/Projects";
import Header from "./Components/Header";
import PrivateRoute from "./Components/PrivateRoute";
import OnlyAdminPrivateRoute from "./Components/OnlyAdminPrivateRoute";
import CreatePost from "./Pages/CreatePost";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/sign-in" element={<Signin />} />
				<Route path="/sign-up" element={<Signup />} />
				<Route element={<PrivateRoute />}>
					<Route path="/dashboard" element={<Dashboard />} />
				</Route>
				<Route element={<OnlyAdminPrivateRoute />}>
					<Route path="/create-post" element={<CreatePost />} />
				</Route>
				<Route path="/projects" element={<Projects />} />
			</Routes>
			<FooterCom />
		</BrowserRouter>
	);
};

export default App;
