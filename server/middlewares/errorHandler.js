// Centralized error handling

const errorHandling = async (err, req, res, next) => {
	console.error(err.stack);
	return res.status(500).json({
		status: 500,
		message: "Something went wrong",
		error: err.message,
	});
};

export default errorHandling;
