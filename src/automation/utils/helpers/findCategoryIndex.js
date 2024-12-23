import { lebonCategories } from "../variables/lebonCategories";

const findSubCategoryIndex = (post) => {
		return lebonCategories[post.category]
				.subCategories
				.findIndex(obj => obj.title === post.subCategory);
}

export { findSubCategoryIndex }