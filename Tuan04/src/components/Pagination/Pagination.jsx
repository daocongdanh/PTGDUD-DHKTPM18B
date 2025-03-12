import "./Pagination.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination() {
  return (
    <div className="pagination">
      <button className="page-button">
        <ChevronLeft size={20} />
      </button>
      <button className="page-button active">1</button>
      <button className="page-button">2</button>
      <button className="page-button">3</button>
      <button className="page-button">4</button>
      <span className="dots">...</span>
      <button className="page-button">10</button>
      <button className="page-button">11</button>
      <button className="page-button">
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
