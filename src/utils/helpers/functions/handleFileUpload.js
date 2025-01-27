const { uploadFileFrontEnd } = require("@/db/storage/uploadFileFrontEnd");

const handleFileUpload = async (files) => {
	try {
		const urls = []
		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			const url = await uploadFileFrontEnd(file, "products")
			urls.push(url)
		}
		return urls
	} catch (error) {
		console.log("🚀 ~ error:", error)
	}
}

export {handleFileUpload}