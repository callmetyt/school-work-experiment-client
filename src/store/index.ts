import { createStore } from "redux";
import { REFRESH_LIST } from "./refreshList";
import { UPDATE_SEARCH_KEY } from "./updateSearchKey";

export interface TListItem {
  locate: string;
  mode: "社招" | "日常实习";
  job: string;
  name: string;
  ability: string[];
  description: string[];
  _id: string;
}

export interface TStore {
  list: TListItem[];
  searchKey: string;
}

export interface TActionType {
  type: typeof REFRESH_LIST | typeof UPDATE_SEARCH_KEY;
  newList: TListItem[];
  key: string;
}

const initialStore: TStore = {
  list: [],
  searchKey: "",
};

export const store = createStore<TStore, TActionType, any, any>(
  (state = initialStore, action) => {
    switch (action.type) {
      case REFRESH_LIST:
        return {
          ...state,
          list: [...action.newList],
        };
      case UPDATE_SEARCH_KEY:
        return {
          ...state,
          searchKey: action.key,
        };
      default:
        return {
          ...state,
        };
    }
  }
);
