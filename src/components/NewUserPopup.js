/** @format */

import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PrimaryButton from "./PrimaryButton";
import { Stack, MenuItem } from "@mui/material";
import { Projects } from "../data/data";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
	display: "flex",
	flexDirection: "column",
	minWidth: "500px",
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

function getStyles(project, projects, theme) {
	return {
		fontWeight:
			projects.indexOf(project) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

const NewUserPopup = ({ open, handleClose }) => {
	const theme = useTheme();
	const [email, setEmail] = useState(null);
	const [role, setRole] = useState("Member");
	const [restriction, setRestriction] = useState("No Restrictions");
	const [projects, setPorjects] = useState([]);

	const handleProjectChange = (event) => {
		const {
			target: { value },
		} = event;
		setPorjects(typeof value === "string" ? value.split(",") : value);
	};
	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style} gap={8}>
					<Typography
						sx={{
							fontSize: "20px",
							fontWeight: "500",
						}}
					>
						Invite New Users
					</Typography>
					<Stack gap={3} direction={"row"} alignItems={"center"}>
						<TextField
							required
							id="email"
							label="Email Address"
							defaultValue={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<TextField
							id="role"
							select
							label="Role"
							defaultValue={role}
							SelectProps={{
								native: true,
							}}
							onChange={(e) => setRole(e.target.value)}
						>
							<option value={"Member"}>Member</option>
							<option value={"Admin"}>Admin</option>
							<option value={"Guest"}>Guest</option>
						</TextField>
						<TextField
							id="restrictions"
							select
							label="Restrictions"
							defaultValue={restriction}
							SelectProps={{
								native: true,
							}}
							onChange={(e) => setRestriction(e.target.value)}
						>
							<option value={"No Restrictions"}>No Restrictions</option>
							<option value={"Add Issues Only"}>Add Issues Only</option>
							<option value={"View Only"}>View Only</option>
						</TextField>
					</Stack>
					<Stack>
						<Typography
							sx={{
								fontSize: "16px",
								fontWeight: "500",
								marginBottom: "15px",
							}}
						>
							To Project(s)
						</Typography>
						<Select
							labelId="demo-multiple-chip-label"
							id="projects"
							multiple
							value={projects}
							onChange={handleProjectChange}
							input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
							renderValue={(selected) => (
								<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
									{selected.map((value) => (
										<Chip key={value} label={value} />
									))}
								</Box>
							)}
							MenuProps={MenuProps}
						>
							{Projects.map((project) => (
								<MenuItem
									key={project.id}
									value={project.projectKey}
									style={getStyles(project, projects, theme)}
								>
									{project.projectName}
								</MenuItem>
							))}
						</Select>
					</Stack>
					<PrimaryButton title="Add" />
				</Box>
			</Modal>
		</div>
	);
};

export default NewUserPopup;
