import { IResponse } from "../../DataModel/common";
import { IArticles } from "../../DataModel/articles/articles";
import http from "../common";

export const getArticles = async () => {
  return await http
    .get<IResponse<IArticles>>("/v3/articles?_limit=100")
    .then((data) => {
      console.log("Responce data", data.data);
      return data.data;
    })
    .catch((error) => error.response.data);
};
