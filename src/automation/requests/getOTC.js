// Function to fetch the one-time code from the server
const getOneTimeCode = async () => {
    let code;
    while (!code) {
        const response = await fetch('http://localhost:3000/otc'); // Server URL to fetch the code
        const data = await response.json();
        code = data.code;
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second before checking again
    }
    return code;
};