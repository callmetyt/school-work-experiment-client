import { connect } from "react-redux";
import ListItem from "../components/ListItem";
import { TListItem, TStore } from "../store";
import refreshList from "../store/refreshList";

let mapStateToProps = (state: TStore) => {
  return {
    list: state.list,
    searchKey: state.searchKey,
  };
};

let mapDispatchToProps = (diapatch: any) => {
  return {
    refreshList: (newList: TListItem[]) => {
      diapatch(refreshList(newList));
    },
  };
};

const List = connect(mapStateToProps, mapDispatchToProps)(ListItem);

export default List;
