/** @format */

import React from "react";

const PrimaryButton = ({ title, action }) => {
	return (
		<button
			style={{
				width: "max-content",
				padding: "10px 15px 10px 15px",
				border: "none",
				borderRadius: "4px",
				backgroundColor: "#00ACE5",
				color: "#ffffff",
				cursor: "pointer",
				fontSize: "14px",
				textTransform: "uppercase",
				fontWeight: "500",
				letterSpacing: "2px",
			}}
			onClick={action}
		>
			{title}
		</button>
	);
};

export default PrimaryButton;
