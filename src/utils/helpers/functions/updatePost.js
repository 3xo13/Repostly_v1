import axios from "axios";

const updatePost = async (postId, post, active) => {
		try {
				const {data} = await axios.post("/api/post/edit", {postId, post, active})
				if (data.success) {
						return data.post;
				}else{
						throw new Error("failed to update post");
				}
		} catch (error) {
				console.log("🚀 ~ updatePost ~ error:", error)
				return post;
		}
}

export default updatePost