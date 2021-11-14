import axios from "axios";
import { TResponseApi } from ".";
import config from "../config";

export async function addApi(data: any): Promise<any> {
  const apiRes = await axios.post(config.serverAddress + "/add", { ...data });
  const res: TResponseApi = apiRes.data;
  if (res.code !== "200") {
    alert(res.msg);
    console.error(res.msg);
  } else {
    alert("添加成功");
    return res.data;
  }
}
