export const UPDATE_SEARCH_KEY = "update_search_ey";

export function updateSearchKey(key: string) {
  return {
    type: UPDATE_SEARCH_KEY,
    key,
  };
}

export default updateSearchKey;
