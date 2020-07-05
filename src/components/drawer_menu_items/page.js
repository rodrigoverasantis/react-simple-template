import React from "react";
import {
	List,
	Divider,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
} from "@material-ui/core";
import {
	Home as Homeicon,
	LooksOne as Number1Icon,
	LooksTwo as Number2Icon,
	Looks3 as Number3Icon,
} from "@material-ui/icons";

function Page(props) {
	const {
		handle_drawer_button,
	} = props;

	const classes = useStyles();

	return (
		<div
			role="presentation"
			onClick={() => handle_drawer_button()}
			onKeyDown={() => handle_drawer_button()}
		>
			<List>
				<ListItem button key="home">
					<ListItemIcon>
						<Homeicon />
					</ListItemIcon>
					<ListItemText primary="Home" />
				</ListItem>
				<ListItem button key="numero_1">
					<ListItemIcon>
						<Number1Icon />
					</ListItemIcon>
					<ListItemText primary="Número 1" />
				</ListItem>
				<ListItem button key="numero_2">
					<ListItemIcon>
						<Number2Icon />
					</ListItemIcon>
					<ListItemText primary="Número 2" />
				</ListItem>
			</List>
			<Divider />
			<List>
				<ListItem button key="numero_3">
					<ListItemIcon>
						<Number3Icon />
					</ListItemIcon>
					<ListItemText primary="Número 3" />
				</ListItem>
			</List>
		</div>
	);
}

const useStyles = makeStyles((theme) => ({
}));

export default Page;