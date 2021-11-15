import { searchApi } from "./search";
import { deleteApi } from "./delete";
import { addApi } from "./add";

export interface TResponseApi {
  code: "200" | "400" | "500"; //200成功，400请求错误，500服务端错误
  msg: string; // 请求结果信息
  data: {
    [key in string]: any;
  };
}

export const apis = { searchApi, deleteApi, addApi };
export default apis;
