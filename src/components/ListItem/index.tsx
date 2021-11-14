import { deleteApi } from "../../api/delete";
import { searchApi } from "../../api/search";
import { TListItem } from "../../store";
import "./index.scss";

export function ListItem({
  list,
  searchKey,
  refreshList,
}: {
  list: TListItem[];
  searchKey: string;
  refreshList: (newList: TListItem[]) => void;
}) {
  const handleCllick = async (_id: string) => {
    await deleteApi(_id);
    const data = await searchApi(searchKey);
    refreshList(data);
  };

  if (!list.length) return null;
  return (
    <div className="list-warp">
      {list.map((item, index) => {
        return (
          <div className="list-item" key={index}>
            <div className="tle">
              <span>{item.name}</span>
              <svg
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2437"
                width="32"
                height="32"
                onClick={() => {
                  handleCllick(item._id);
                }}
              >
                <path
                  d="M106.666667 213.333333h810.666666v42.666667H106.666667z"
                  fill="#3D3D3D"
                  p-id="2438"
                ></path>
                <path
                  d="M640 128v42.666667h42.666667V128c0-23.573333-19.093333-42.666667-42.538667-42.666667H383.872A42.496 42.496 0 0 0 341.333333 128v42.666667h42.666667V128h256z"
                  fill="#3D3D3D"
                  p-id="2439"
                ></path>
                <path
                  d="M213.333333 896V256H170.666667v639.957333C170.666667 919.552 189.653333 938.666667 213.376 938.666667h597.248C834.218667 938.666667 853.333333 919.68 853.333333 895.957333V256h-42.666666v640H213.333333z"
                  fill="#3D3D3D"
                  p-id="2440"
                ></path>
                <path
                  d="M320 341.333333h42.666667v384h-42.666667zM490.666667 341.333333h42.666666v384h-42.666666zM661.333333 341.333333h42.666667v384h-42.666667z"
                  fill="#3D3D3D"
                  p-id="2441"
                ></path>
              </svg>
            </div>
            <div className="sub">
              {item.locate}
              <div className="lineDevider"></div>
              {item.job}
              <div className="lineDevider"></div>
              {item.mode}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListItem;
