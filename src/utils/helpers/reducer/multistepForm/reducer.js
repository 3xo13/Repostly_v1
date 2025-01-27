// This is the initial state of the application
const initialState = {
	title: "",
	category: "Home & Garden",
	subCategory: "",
	postType: "offer",
	images: [],
	options: {

	}
};

// This is the reducer function, which manages state changes
function reducer(state, action) {
	switch (action.type) {
		case 'title':
			return {
				...state,
				title: action.payload
			};
		case 'category':
			return {
				...state,
				category: action.payload
			};
		case 'subCategory':
			return {
				...state,
				subCategory: action.payload
			};
		case 'images':
			return {
				...state,
				images: [
					...state.images,
					action.payload
				]
			};
		case 'updateOption':
			return {
				...state,
				options: {
					...state.options,
					[action.payload.key]: action.payload.value
				}
			};
		default:
			throw new Error('Unknown action type');
	}
}

export {initialState, reducer}