import Layout from "../components/Layout";

import "../styles/globals.scss";

type AppProps = {
	Component: any;
	pageProps: any;
};

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
