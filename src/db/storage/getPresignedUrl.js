import axios from "axios"
import { v4 as uuidv4 } from "uuid"

const getPresignedUrl = async (file, directory) => {
	let fileExtention = file.name.slice(file.name.lastIndexOf(".") + 1)
	const key = `uploads/${directory}/${uuidv4()}.${fileExtention}`
	try {
		const res = await axios.post("/api/presignedUrl", JSON.stringify({ key }))
		console.log("🚀 ~ getUploadUrl ~ res:", res.data)
		return res.data;
	} catch (error) {
		console.log("🚀 ~ getUploadUrl ~ error:", error)
		return error
	}
}

export {getPresignedUrl}