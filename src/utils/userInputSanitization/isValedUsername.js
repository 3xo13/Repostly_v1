export default function isValidUsername(username) {
    return /^[a-zA-Z0-9 ]*$/.test(username);
}