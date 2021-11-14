import Input from "./components/Input";
import "./index.scss";

export function Search() {
  return (
    <div className="search">
      <div className="tle">
        <div className="text">和牛逼的人&nbsp;&nbsp;一起996</div>
        <div className="sub">JOIN&nbsp;&nbsp;HEARTDANCE</div>
      </div>

      <Input />
    </div>
  );
}

export default Search;
