/** @format */

import { Stack, Typography } from "@mui/material";
import { Book, Bug, Buildings, User } from "@phosphor-icons/react";
import React from "react";
import ActionCard from "../components/ActionCard";
import TopBar from "../components/TopBar";
import { Projects, Issues } from "../data/data";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Dashboard = () => {
	return (
		<>
			<TopBar />
			<Stack
				p={4}
				sx={{
					backgroundColor: "#f0f0f0",
					minHeight: "100vh",
				}}
			>
				<Stack>
					<Typography
						sx={{
							fontSize: "20px",
							fontWeight: "500",
						}}
					>
						Get started with your new BugWatch Space!
					</Typography>
					<Stack direction={"row"} marginTop={5} gap={2}>
						<ActionCard
							icon={<Book size={60} />}
							title="Add Project"
							description="First, add a project that you would like to work on."
							onClickFunction={() => {}}
							buttonTitle={"Add"}
						/>
						<ActionCard
							icon={<User size={60} />}
							title="Add User"
							description="Invite members to this Space to work on your projects with you."
							onClickFunction={() => {}}
							buttonTitle={"Add"}
						/>
						<ActionCard
							icon={<Bug size={60} />}
							title="Add Issue"
							description="Finally, add issues that you would like to work on."
							onClickFunction={() => {}}
							buttonTitle={"Add"}
						/>
					</Stack>
				</Stack>
				<Stack
					sx={{
						marginTop: "50px",
						maxWidth: "720px",
					}}
				>
					<Typography
						sx={{
							fontSize: "20px",
							fontWeight: "500",
						}}
					>
						Projects
					</Typography>
					<Stack gap={2} marginTop={2}>
						{Projects.map((project) => (
							<Stack
								direction={"row"}
								alignItems={"center"}
								gap={2}
								p={1}
								sx={{
									backgroundColor: "#ffffff",
									border: "0.5px solid #000000",
									borderRadius: "6px",
									cursor: "pointer",
								}}
							>
								<Stack>
									<Buildings size={40} />
								</Stack>
								<Stack>
									<Typography
										sx={{
											fontSize: "16px",
										}}
									>
										{project.projectName}
									</Typography>
									<Typography
										sx={{
											fontSize: "14px",
											color: "grey",
										}}
									>
										{project.projectKey}
									</Typography>
								</Stack>
							</Stack>
						))}
					</Stack>
				</Stack>
				<Stack
					sx={{
						marginTop: "50px",
						maxWidth: "720px",
					}}
				>
					<Typography
						sx={{
							fontSize: "20px",
							fontWeight: "500",
						}}
					>
						Issues
					</Typography>
					<TableContainer
						sx={{
							backgroundColor: "#ffffff",
							marginTop: "16px",
							border: "0.5px solid #000000",
							borderRadius: "6px",
						}}
					>
						<Table sx={{ minWidth: "720px" }} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>Key</TableCell>
									<TableCell align="right">Subject</TableCell>
									<TableCell align="right">Priority</TableCell>
									<TableCell align="right">Status</TableCell>
									<TableCell align="right">Due Date</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{Issues.map((issue) => (
									<TableRow
										key={issue.id}
										sx={{
											"&:last-child td, &:last-child th": { border: 0 },
											cursor: "pointer",
										}}
									>
										<TableCell component="th" scope="row">
											{issue.projectKey}
										</TableCell>
										<TableCell align="right">{issue.subject}</TableCell>
										<TableCell align="right">{issue.priority}</TableCell>
										<TableCell align="right">{issue.status}</TableCell>
										<TableCell align="right">{issue.dueDate}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Stack>
			</Stack>
		</>
	);
};

export default Dashboard;
