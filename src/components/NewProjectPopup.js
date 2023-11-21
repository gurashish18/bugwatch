/** @format */

import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PrimaryButton from "./PrimaryButton";
import { Stack } from "@mui/material";

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
	minWidth: "420px",
};

const NewProjectPopup = ({ open, handleClose }) => {
	const [projectName, setProjectName] = useState(null);
	const [projectKey, setProjectKey] = useState(null);
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
						Add Project
					</Typography>
					<Stack gap={3}>
						<TextField
							required
							id="outlined-required"
							label="Project Name"
							defaultValue={projectName}
							onChange={(e) => setProjectName(e.target.value)}
						/>
						<Stack>
							<TextField
								required
								id="outlined-required"
								label="Project Key"
								defaultValue={projectKey}
								onChange={(e) => setProjectKey(e.target.value)}
							/>
							<Typography
								marginTop={1}
								sx={{
									fontSize: "14px",
									color: "grey",
								}}
							>
								The project key is a unique identifier for a project. A short,
								concise key is recommended.
								<br /> (e.g. Project name Backlog has project key BLG_2)
								Uppercase letters (A-Z), numbers (0-9) and underscore (_) can be
								used.
							</Typography>
						</Stack>
					</Stack>
					<PrimaryButton title="Submit" />
				</Box>
			</Modal>
		</div>
	);
};

export default NewProjectPopup;
