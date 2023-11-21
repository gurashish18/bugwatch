/** @format */

import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import PrimaryButton from "./PrimaryButton";

const ActionCard = ({
	icon,
	title,
	description,
	onClickFunction,
	buttonTitle,
}) => {
	return (
		<Stack
			p={2}
			direction={"row"}
			sx={{
				flex: 1,
				backgroundColor: "#ffffff",
				boxShadow:
					"rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
				borderRadius: "10px",
			}}
			spacing={4}
			minHeight={"140px"}
		>
			<Stack>{icon}</Stack>
			<Stack justifyContent={"space-between"}>
				<Stack marginBottom={"10px"}>
					<Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
						{title}
					</Typography>
					<Typography sx={{ fontSize: "14px" }}>{description}</Typography>
				</Stack>
				<PrimaryButton title={buttonTitle} action={() => onClickFunction()}>
					Add
				</PrimaryButton>
			</Stack>
		</Stack>
	);
};

export default ActionCard;
