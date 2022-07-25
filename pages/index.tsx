import type { NextPage } from "next";
import Main from "../components/Main";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
	return (
		<>
			<Main />
			<Services />
			<Gallery />
			<Contact />
		</>
	);
};

export default Home;
