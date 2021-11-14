import { useState } from "react";
import { addApi } from "../../api/add";
import { searchApi } from "../../api/search";
import { TListItem } from "../../store";
import "./index.scss";

export function NewListItem({
  key,
  list,
  refreshList,
}: {
  key: string;
  list: TListItem[];
  refreshList: (list: TListItem[]) => void;
}) {
  const [nameFlag, setNameFlag] = useState(false);
  const [locateFlag, setLocateFlag] = useState(false);
  const [jobFlag, setJobFlag] = useState(false);

  const [name, setName] = useState("");
  const [locate, setLocate] = useState("");
  const [job, setJob] = useState("");
  const [mode, setMode] = useState("日常实习生");

  if (!list.length) return null;

  const hanlderSubmit = async () => {
    const data = {
      name,
      locate,
      job,
      mode,
    };
    await addApi(data);
    const res = await searchApi(key);
    refreshList(res);
    setName("");
    setLocate("");
    setJob("");
    setJobFlag(false);
    setLocateFlag(false);
    setNameFlag(false);
  };

  return (
    <div className="newListItem">
      <div className={`inputWarp nameWarp ${nameFlag ? "hasVal" : ""}`}>
        <label>输入职位名称</label>
        <input
          type="text"
          onFocus={() => {
            if (!nameFlag) setNameFlag(true);
          }}
          onBlur={(e) => {
            if (nameFlag && !e.target.value) setNameFlag(false);
          }}
          onChange={(e) => {
            if (!nameFlag && e.target.value) setNameFlag(true);
            setName(e.target.value);
          }}
          value={name}
        />
      </div>

      <div className={`inputWarp locateWarp ${locateFlag ? "hasVal" : ""}`}>
        <label>输入工作地点</label>
        <input
          type="text"
          onFocus={() => {
            if (!locateFlag) setLocateFlag(true);
          }}
          onBlur={(e) => {
            if (locateFlag && !e.target.value) setLocateFlag(false);
          }}
          onChange={(e) => {
            if (!locateFlag && e.target.value) setLocateFlag(true);
            setLocate(e.target.value);
          }}
          value={locate}
        />
      </div>

      <div className={`inputWarp jobWarp ${jobFlag ? "hasVal" : ""}`}>
        <label>输入职位类型</label>
        <input
          type="text"
          onFocus={() => {
            if (!jobFlag) setJobFlag(true);
          }}
          onBlur={(e) => {
            if (jobFlag && !e.target.value) setJobFlag(false);
          }}
          onChange={(e) => {
            if (!jobFlag && e.target.value) setJobFlag(true);
            setJob(e.target.value);
          }}
          value={job}
        />
      </div>

      <div className="lineWarp">
        <div className="mode">
          <input
            type="radio"
            value="日常实习生"
            name="mode"
            onChange={(e) => {
              setMode(e.target.value);
            }}
          />
          <label>日常实习生</label>
          <input
            type="radio"
            value="社招"
            name="mode"
            onChange={(e) => {
              setMode(e.target.value);
            }}
          />
          <label>社招</label>
        </div>

        <button
          className="submit"
          onClick={() => {
            hanlderSubmit();
          }}
        >
          添加一条招聘信息
        </button>
      </div>
    </div>
  );
}

export default NewListItem;
