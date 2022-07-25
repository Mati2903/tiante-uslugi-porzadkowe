import NavMenu from "./NavMenu";
import Meta from "./Meta";
import Footer from "./Footer";
import CallBanner from "./CallBanner";

type LayoutProps = {
	children: any;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Meta />
			<NavMenu />
			<div>
				<main>{children}</main>
			</div>
			<CallBanner />
			<Footer />
		</>
	);
};

export default Layout;
