import React from "react";
import Page from "./page";

function Index(props) {
	const {
		is_drawer_open,
		handle_drawer_button,
	} = props;

	return (
		<Page is_drawer_open={is_drawer_open} handle_drawer_button={handle_drawer_button} />
	);
}

export default Index;