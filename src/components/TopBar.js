/** @format */

import { Stack, IconButton, Typography, Avatar } from "@mui/material";
import { Bell, Info } from "@phosphor-icons/react";
import React from "react";

const TopBar = () => {
	return (
		<Stack
			direction={"row"}
			alignItems={"center"}
			justifyContent={"space-between"}
			sx={{
				backgroundColor: "#ffffff",
				borderBottom: "1px solid #BDBDBD",
				padding: "0px 10px 0px 10px",
			}}
		>
			<Stack direction={"row"} spacing={4}>
				<IconButton disableRipple="true">
					<Typography color={"#000000"}>Dashboard</Typography>
				</IconButton>
				<IconButton disableRipple="true">
					<Typography color={"#000000"}>Projects</Typography>
				</IconButton>
			</Stack>
			<Stack direction={"row"} spacing={0.5}>
				<IconButton>
					<Bell color="#000000" />
				</IconButton>
				<IconButton>
					<Info color="#000000" />
				</IconButton>
				<IconButton disableRipple="true">
					<Avatar>G</Avatar>
				</IconButton>
			</Stack>
		</Stack>
	);
};

export default TopBar;
