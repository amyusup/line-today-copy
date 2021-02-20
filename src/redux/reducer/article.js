import { GET_ARTICLE, GET_CATEGORY} from "../type/article";

const initialState = {
  article: [],
  category: [],
  message: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLE:
      return {
        ...state,
        article: action.payload,
      };
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state
  }
};
