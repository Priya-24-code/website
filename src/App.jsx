import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Members from "./components/Members";
import RegistrationLinks from "./components/RegistrationLinks";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/registration-links" element={<RegistrationLinks />}></Route>
			<Route path="/members" element={<Members />}></Route>
			<Route path="/about-us" element={<AboutUs />}></Route>
			<Route path="/contact-us" element={<ContactUs />}></Route>
		</Routes>
	);
};

export default App;
