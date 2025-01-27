const camelCaseToSpaces = (str) => {
	// Replace camelCase with spaces
	let spacedString = str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');

	// Convert the entire string to lowercase
	spacedString = spacedString.toLowerCase();

	// Capitalize the first letter
	spacedString = spacedString.charAt(0).toUpperCase() + spacedString.slice(1);

	return spacedString;
}

export {camelCaseToSpaces}