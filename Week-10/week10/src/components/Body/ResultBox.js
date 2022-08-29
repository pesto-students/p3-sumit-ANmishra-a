import Link_list from "./Linked_List";
import "./ResultBox.css";
function ResultBox({ sortResult, longResult }) {
  return (
    <div className="result-container">
      <Link_list sortResult={sortResult} longResult={longResult} />
    </div>
  );
}
export default ResultBox;
