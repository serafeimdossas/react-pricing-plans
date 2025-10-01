import "./PageTitle.css";
import { page_title } from "../../data/data";

function PageTitle() {
  return (
    <div className="page-title-container">
      <h2 className="title">{page_title.title}</h2>
      <p className="subtitle">{page_title.subtitle}</p>
    </div>
  );
}

export default PageTitle;
