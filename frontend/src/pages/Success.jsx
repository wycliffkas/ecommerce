import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
	const navigate = useNavigate();

	console.log(navigate);
  
	return <div>Successful!</div>;
};

export default Success;
