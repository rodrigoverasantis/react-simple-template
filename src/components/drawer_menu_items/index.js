import React from "react";
import Page from "./page";

function Index(props) {
	const {
		handle_drawer_button,
	} = props;

	return (
		<Page handle_drawer_button={handle_drawer_button} />
	);
}

export default Index;