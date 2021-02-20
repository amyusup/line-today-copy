import {
  GET_ARTICLE,
  GET_CATEGORY
} from "../type/article";
import axios from "../../helpers/axios";

export const getArticle = () => async (dispatch) => {
  try {
    const res = await axios.get(`/`);
    dispatch({ type: GET_ARTICLE, payload: res.data.result.categories });
    dispatch({ type: GET_CATEGORY, payload: res.data.result.categoryList });
  } catch (e) {
    console.log(e);
    dispatch({ type: GET_ARTICLE, payload: e });
    dispatch({ type: GET_CATEGORY, payload: e });
  }
};