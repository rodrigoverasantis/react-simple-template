import React, { useState, Fragment } from "react";
import AppBar from "../../components/app_bar";
import DrawerMenu from "../../components/drawer_menu";

function Page(props) {
	const [IsDrawerOpen, SetIsDrawerOpen] = useState(false);

	const handleDrawerButton = () => {
		SetIsDrawerOpen(!IsDrawerOpen);
	}

	return (
		<Fragment>
			<AppBar handle_drawer_button={handleDrawerButton} />
			<DrawerMenu is_drawer_open={IsDrawerOpen} handle_drawer_button={handleDrawerButton} />
		</Fragment>
	);
}

export default Page;