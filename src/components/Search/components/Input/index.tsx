import { useState } from "react";
import { searchApi } from "../../../../api/search";
import { connect } from "react-redux";
import "./index.scss";
import refreshList from "../../../../store/refreshList";
import updateSearchKey from "../../../../store/updateSearchKey";

let Input = function ({ dispatch }: any) {
  const [key, setKey] = useState("");

  const handlerClick = async (key: string) => {
    const data = await searchApi(key);
    console.log(data);
    dispatch(refreshList(data));
    dispatch(updateSearchKey(key));
  };

  return (
    <div className="input">
      <div className="inner-warp">
        <input
          type="text"
          className="inner"
          placeholder="输入城市或职位进行搜索，例如:北京（默认展示所有内容）"
          value={key}
          onChange={(e) => {
            setKey(e.target.value);
          }}
        />
      </div>
      <div
        className="btn"
        onClick={(e) => {
          handlerClick(key);
        }}
      >
        <svg className="icon" viewBox="0 0 1024 1024">
          <defs>
            <style></style>
          </defs>
          <path d="M769.13 673.493l144.683 144.683a21.333 21.333 0 0 1 0 30.165l-36.202 36.203a21.333 21.333 0 0 1-30.166 0L706.56 743.68A361.259 361.259 0 0 1 469.333 832c-200.298 0-362.666-162.368-362.666-362.667s162.368-362.666 362.666-362.666S832 269.035 832 469.333c0 75.712-23.19 146.006-62.87 204.16zM469.334 742.4C620.16 742.4 742.4 620.16 742.4 469.333S620.16 196.267 469.333 196.267s-273.066 122.24-273.066 273.066S318.507 742.4 469.333 742.4z"></path>
        </svg>
      </div>
    </div>
  );
};

Input = connect()(Input) as any;

export default Input;
