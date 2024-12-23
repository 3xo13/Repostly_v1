const waitForMilliseconds = async (seconds) => {
	if (!seconds) {
		throw new Error("please provide a number of seconds");
	}
	if (typeof seconds !== "number") {
		throw new Error("please provide a number");
	}
	return await new Promise(function (resolve) {
		setTimeout(resolve, seconds);
	});
}

export  {waitForMilliseconds}