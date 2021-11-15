import { connect } from "react-redux";
import NewListItem from "../components/NewListItem";
import { TListItem, TStore } from "../store";
import refreshList from "../store/refreshList";

let mapStateToProps = (state: TStore) => {
  return {
    key: state.searchKey,
    list: state.list,
  };
};

let mapDispatchToProps = (diapatch: any) => {
  return {
    refreshList: (newList: TListItem[]) => {
      diapatch(refreshList(newList));
    },
  };
};

const NewList = connect(mapStateToProps, mapDispatchToProps)(NewListItem);

export default NewList;
