import React from 'react';
import {
	Drawer,
	makeStyles,
} from "@material-ui/core";
import DrawerMenuItems from "../drawer_menu_items";

function Page(props) {
	const {
		is_drawer_open,
		handle_drawer_button,
	} = props;

	const classes = useStyles();

	return (
		<Drawer anchor="left" open={is_drawer_open} onClose={() => handle_drawer_button()}>
			<DrawerMenuItems handle_drawer_button={handle_drawer_button} />
		</Drawer>
	);
}

const useStyles = makeStyles((theme) => ({
}))

export default Page;