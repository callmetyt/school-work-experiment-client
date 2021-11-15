import { TListItem } from ".";

export const REFRESH_LIST = "refresh_list";

export function refreshList(newList: TListItem[]) {
  return {
    type: REFRESH_LIST,
    newList,
  };
}

export default refreshList;
