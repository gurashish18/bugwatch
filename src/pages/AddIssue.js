/** @format */

import React, { useState, useRef } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import { Stack, Typography, TextField } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import { IssueTypes, Priorities, Projects, Status, Users } from "../data/data";
import PrimaryButton from "../components/PrimaryButton";

const AddIssue = () => {
	const [project, setProject] = useState(null);
	const [issueType, setIssueType] = useState(null);
	const [status, setStatus] = useState(null);
	const [summary, setSummary] = useState(null);
	const [description, setDescription] = useState(null);
	const [assignee, setAssignee] = useState(null);
	const [priority, setPriority] = useState(null);
	const [reporter, setReporter] = useState(null);
	const [files, setFiles] = useState(null);
	const editorRef = useRef(null);
	const handleDescriptionChange = () => {
		if (editorRef.current) {
			setDescription(editorRef.current.getContent());
		}
	};
	return (
		<Stack sx={{ display: "flex" }}>
			<TopBar />
			<Sidebar />
			<Stack
				sx={{
					marginLeft: "250px",
					marginTop: "70px",
				}}
			>
				<Stack p={4} sx={{ backgroundColor: "#F0F0F0" }}>
					<Typography>Add Issue</Typography>
					<Stack gap={3} marginTop={"40px"} marginBottom={"40px"}>
						<TextField
							id="project"
							select
							label="Project"
							defaultValue={project}
							SelectProps={{
								native: true,
							}}
							onChange={(e) => setProject(e.target.value)}
							sx={{
								backgroundColor: "#ffffff",
							}}
						>
							{Projects.map((project) => (
								<option key={project.id} value={project.projectKey}>
									{project.projectName}
								</option>
							))}
						</TextField>
						<Stack direction={"row"} gap={2}>
							<TextField
								sx={{
									flex: 1,
									backgroundColor: "#ffffff",
								}}
								id="status"
								select
								label="Status"
								defaultValue={status}
								SelectProps={{
									native: true,
								}}
								onChange={(e) => setStatus(e.target.value)}
							>
								{IssueTypes.map((issue) => (
									<option key={issue.id} value={issue.type}>
										{issue.type}
									</option>
								))}
							</TextField>
							<TextField
								sx={{
									flex: 1,
									backgroundColor: "#ffffff",
								}}
								id="type"
								select
								label="Issue Type"
								defaultValue={issueType}
								SelectProps={{
									native: true,
								}}
								onChange={(e) => setIssueType(e.target.value)}
							>
								{Status.map((status) => (
									<option key={status.id} value={status.type}>
										{status.type}
									</option>
								))}
							</TextField>
						</Stack>
						<TextField
							required
							id="summary"
							label="Summary"
							defaultValue={summary}
							onChange={(e) => setSummary(e.target.value)}
							sx={{
								backgroundColor: "#ffffff",
							}}
						/>
						<Typography>Description</Typography>
						<Editor
							apiKey="1t66zti3sd3w509ezu3v0xonfaeidsthc8ixkur37uia1a0a"
							onInit={(evt, editor) => (editorRef.current = editor)}
							initialValue="<p>Enter description here...</p>"
							init={{
								height: 250,
								menubar: false,
								plugins: [
									"advlist",
									"autolink",
									"lists",
									"link",
									"image",
									"charmap",
									"preview",
									"anchor",
									"searchreplace",
									"visualblocks",
									"code",
									"fullscreen",
									"insertdatetime",
									"media",
									"table",
									"code",
									"help",
									"wordcount",
								],
								toolbar:
									"undo redo | blocks | " +
									"bold italic forecolor | alignleft aligncenter " +
									"alignright alignjustify | bullist numlist outdent indent | " +
									"removeformat | help",
								content_style:
									"body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
							}}
							onEditorChange={handleDescriptionChange}
						/>
						<Stack direction={"row"} gap={2}>
							<TextField
								sx={{
									flex: 1,
									backgroundColor: "#ffffff",
								}}
								id="assignee"
								select
								label="Assignee"
								defaultValue={assignee}
								SelectProps={{
									native: true,
								}}
								onChange={(e) => setAssignee(e.target.value)}
							>
								{Users.map((user) => (
									<option key={user.id} value={user.name}>
										{user.name}
									</option>
								))}
							</TextField>
							<TextField
								sx={{
									flex: 1,
									backgroundColor: "#ffffff",
								}}
								id="priority"
								select
								label="Priority Level"
								defaultValue={priority}
								SelectProps={{
									native: true,
								}}
								onChange={(e) => setPriority(e.target.value)}
							>
								{Priorities.map((priority) => (
									<option key={priority.id} value={priority.level}>
										{priority.level}
									</option>
								))}
							</TextField>
						</Stack>
						<TextField
							sx={{
								flex: 1,
								backgroundColor: "#ffffff",
							}}
							id="reporter"
							label="Reporter"
							defaultValue={reporter}
							onChange={(e) => setReporter(e.target.value)}
						>
							{Users.map((user) => (
								<option key={user.id} value={user.name}>
									{user.name}
								</option>
							))}
						</TextField>
						<Stack>
							<Typography>Attachments</Typography>
							<PrimaryButton
								title={"Upload attachments"}
								action={() => {}}
							></PrimaryButton>
						</Stack>
					</Stack>
					<PrimaryButton title="Submit" />
				</Stack>
			</Stack>
		</Stack>
	);
};

export default AddIssue;
