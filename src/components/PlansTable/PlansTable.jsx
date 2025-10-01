import "./PlansTable.css";
import {
  plans,
  plans_keys,
  plans_labels,
  features_labels,
} from "../../data/data";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RemoveIcon from "@mui/icons-material/Remove";

function PlansTable() {
  const tableHead = () => {
    return (
      <thead className="plans-table-head">
        <tr className="plans-table-head-row">
          <td className="plans-table-head-cell"></td>
          <td className="plans-table-head-cell no-plan-cell">
            {plans_labels.no_plan}
          </td>
          <td className="plans-table-head-cell">{plans_labels.monthly_plan}</td>
          <td className="plans-table-head-cell last-cell rounded-top">
            {plans_labels.yearly_plan}
          </td>
        </tr>
      </thead>
    );
  };

  const tableBody = () => {
    // get categories from any plan, they all have the same structure
    const categories = Object.keys(plans.no_plan);

    return (
      <tbody className="plans-table-body">
        {categories.map((category) => {
          const features = Object.keys(plans.no_plan[category]);

          return (
            <>
              {/* Category row */}
              <tr className="plans-table-category-row">
                <td className="plans-table-category-cell">
                  {features_labels[category].label}
                </td>
                <td></td>
                <td></td>
                <td className="last-cell"></td>
              </tr>

              {/* Feature rows */}
              {features.map((feature) => {
                const values = plans_keys.map(
                  (plan) => plans[plan][category][feature]
                );

                return (
                  <tr key={feature} className="plans-table-feature-row">
                    <td className="plans-table-feature-cell">
                      {features_labels[category].features[feature]}
                    </td>
                    {values.map((val, idx) => {
                      const isLast = idx === values.length - 1;
                      return val ? (
                        <td
                          key={idx}
                          className={
                            isLast
                              ? "plans-table-feature-value last-cell"
                              : "plans-table-feature-value"
                          }
                        >
                          <CheckCircleIcon style={{ color: "#0a6b4b" }} />
                        </td>
                      ) : (
                        <td
                          key={idx}
                          className={
                            isLast
                              ? "plans-table-feature-value last-cell"
                              : "plans-table-feature-value"
                          }
                        >
                          <RemoveIcon />
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </>
          );
        })}
      </tbody>
    );
  };

  return (
    <div className="plans-table-container">
      <table className="plans-table">
        {tableHead()}
        {tableBody()}
      </table>
    </div>
  );
}

export default PlansTable;
