import { getPresignedUrl } from "./getPresignedUrl";
import { put } from "./Put";

const uploadFileFrontEnd = async (file, directory) => {
	if (file && !(file instanceof File)) {
		return file;
	}
	try {
		
		const res = await getPresignedUrl(file, directory);
		const { uploadUrl, filePath } = res;
		const uploadResult = await put(uploadUrl, file)
		if (uploadResult) {
			return filePath
		}else{
			throw new Error("error while uploading file using presigned url");
			
		}

	} catch (error) {
		console.log("🚀 ~ uploadFileFrontEnd ~ error:", error)
		return error
	}
}

export {uploadFileFrontEnd}