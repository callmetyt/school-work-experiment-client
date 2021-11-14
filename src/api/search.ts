import axios from "axios";
import { TResponseApi } from ".";
import config from "../config";

export async function searchApi(key: string): Promise<any> {
  const apiRes = await axios.post(config.serverAddress + "/search", {
    key,
  });
  const res: TResponseApi = apiRes.data;
  if (res.code !== "200") {
    alert(res.msg);
    console.error(res.msg);
  } else {
    return res.data;
  }
}
