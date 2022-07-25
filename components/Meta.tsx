import Head from "next/head";

type metaProps = {
	title: string;
	keywords: string;
	description: string;
};

const Meta = ({ title, keywords, description }: metaProps) => {
	return (
		<Head>
			<meta name="vievport" content="width=device-width, initial-scale=1" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.ico" />
			<title>{title}</title>
		</Head>
	);
};

Meta.defaultProps = {
	title: "Tiante - usługi porządkowe",
	keywords:
		"usługi porządkowe, mycie witryn, mycie szyb, mycie okien, mycie witryn sklepowych, galeria, sprzątanie, porządki, pranie, mycie okien lublin, mycie witryn lublin, mycie witryn w galerii, mycie witryn sklepowych lublin, vivo, tarasy zamkowe, felicity, olimp, plaza",
	description:
		"Firma Tiante świadczy kompleksowe usługi w zakresie mycia witryn sklepowych oraz innych prac porządkowych w domach, sklepach i biurach",
};

export default Meta;
