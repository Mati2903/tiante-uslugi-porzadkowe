import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavMenu = () => {
	//remove active class from nav menu elements after click on company logo
	const handleClick = () => {
		const navLink = document.querySelectorAll("a.nav-link");
		Array.from(navLink).some(({ classList }) => {
			classList.contains("active") ? classList.remove("active") : null;
		});
	};
	return (
		<>
			<Navbar
				collapseOnSelect
				expand="md"
				bg="primary"
				variant="dark"
				fixed="top"
			>
				<Container>
					<Navbar.Brand href="#" onClick={handleClick}>
						Tiante
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
					<Navbar.Collapse id="responsive-navbar-nav justify-content-end">
						<Nav className="align-items-end nav-links">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#services">Usługi</Nav.Link>
							<Nav.Link href="#gallery">Galeria</Nav.Link>
							<Nav.Link href="#contact">Kontakt</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavMenu;

// import React from "react";

// const Nav = () => {
// 	return (
// 		<section className="nav">
// 			<a href="/" className="nav__logo">
// 				LOGO
// 			</a>
// 			<a href="tel:+48530447423" className="nav__phone">
// 				530 447 423
// 			</a>
// 			<a href="mailto:tianteinfo@gmail.com" className="nav__email">
// 				tianteinfo@gmail
// 			</a>
// 		</section>
// 	);
// };

// export default Nav;
