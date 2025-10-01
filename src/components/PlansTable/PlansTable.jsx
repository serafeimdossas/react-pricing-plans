import { useState, useEffect } from "react";
import "./PlansTable.css";
import "react-tippy/dist/tippy.css";
import {
  plans,
  plans_keys,
  plans_labels,
  features_labels,
  plans_pricing,
} from "../../data/data";
import { Tooltip } from "react-tippy";
import Button from "../Button/Button";
import Chip from "@mui/material/Chip";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RemoveIcon from "@mui/icons-material/Remove";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function PlansTable() {
  const [width, setWidth] = useState(window.innerWidth);
  const [showAll, setShowAll] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("yearly_plan");

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tableHead = () => {
    return (
      <thead className="plans-table-head">
        <tr className="plans-table-head-row">
          <td className="plans-table-head-cell empty-cell"></td>
          <td className="plans-table-head-cell no-plan-cell">
            {plans_labels.no_plan}
          </td>
          <td className="plans-table-head-cell">{plans_labels.monthly_plan}</td>
          <td className="plans-table-head-cell last-cell rounded-top">
            {bestValueChip()}
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
        <tr>
          <td colSpan={4} className="no-padding-cell">
            <div
              className={`plans-scroll-wrapper ${
                showAll ? "expanded" : "collapsed"
              }`}
            >
              <table className="inner-table">
                <tbody>
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
                        {features.map((feature, index) => {
                          const values = plans_keys.map(
                            (plan) => plans[plan][category][feature]
                          );

                          const isLastFeature = index === features.length - 1;

                          return (
                            <tr
                              key={feature}
                              className={
                                isLastFeature
                                  ? "plans-table-feature-row last-category-feature-row"
                                  : "plans-table-feature-row"
                              }
                            >
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
                                    <CheckCircleIcon
                                      style={{ color: "#0a6b4b" }}
                                    />
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
              </table>
            </div>
          </td>
        </tr>
        {lastRow()}
      </tbody>
    );
  };

  const lastRow = () => {
    return showAll ? (
      <tr className="plans-table-last-row">
        <td className="plans-table-last-row-cell"></td>
        <td className="plans-table-last-row-cell toggle-cell">
          {showMoreLessButton()}
        </td>
        <td className="plans-table-last-row-cell">
          {priceContainer("monthly_plan")}
        </td>
        <td className="plans-table-last-row-cell last-cell rounded-bottom">
          {priceContainer("yearly_plan")}
        </td>
      </tr>
    ) : (
      <>
        <tr>
          <td colSpan={4} className="span-toggle-cell">
            {showMoreLessButton()}
          </td>
        </tr>
        <tr className="plans-table-last-row">
          <td className="plans-table-last-row-cell"></td>
          <td className="plans-table-last-row-cell"></td>
          <td className="plans-table-last-row-cell">
            {priceContainer("monthly_plan")}
          </td>
          <td className="plans-table-last-row-cell">
            {priceContainer("yearly_plan")}
          </td>
        </tr>
      </>
    );
  };

  const priceContainer = (plan_key) => {
    return (
      <div className="price-container">
        {plan_key === "yearly_plan" ? (
          <p className="price-value-title">
            <Tooltip
              title="Save 159€!"
              position="right"
              open={true}
              arrow={true}
              sticky={true}
            >
              <span className="price-value-amount">
                {`${plans_pricing[plan_key].monthly_cost}€`}
              </span>
              {` /month`}
            </Tooltip>
          </p>
        ) : (
          <p className="price-value-title">
            <span className="price-value-amount">
              {`${plans_pricing[plan_key].monthly_cost}€ `}
            </span>
            {` /month`}
          </p>
        )}
        <p className="price-value-subtitle">
          {`${plans_pricing[plan_key].yearly_cost}€${
            plan_key === "yearly_plan" ? "*" : ""
          }/year billed ${
            plan_key === "monthly_plan" ? "monthly" : "annually"
          }`}
        </p>
        <>
          <Button
            type={plan_key === "monthly_plan" ? "secondary" : "primary"}
            text={"Start free trial"}
            onClick={() =>
              alert(
                `You selected the ${
                  plan_key === "monthly_plan" ? "monthly" : "annually"
                } plan`
              )
            }
          />
        </>
      </div>
    );
  };

  const priceContainerMobile = (plan_key) => {
    return (
      <div className="price-container">
        {plan_key === "yearly_plan" ? (
          <div className="price-value-title">
            <Tooltip
              title="Save 159€!"
              position="left"
              open={true}
              arrow={true}
              disableInteractive={true}
            >
              <span className="price-value-amount">
                {`${plans_pricing[plan_key].monthly_cost}€`}
              </span>
              {` /month`}
            </Tooltip>
          </div>
        ) : (
          <p className="price-value-title">
            <span className="price-value-amount">
              {`${plans_pricing[plan_key].monthly_cost}€ `}
            </span>
            {` /month`}
          </p>
        )}
        <p className="price-value-subtitle">
          {`${plans_pricing[plan_key].yearly_cost}€${
            plan_key === "yearly_plan" ? "*" : ""
          }/year billed ${
            plan_key === "monthly_plan" ? "monthly" : "annually"
          }`}
        </p>
        <Button
          type={"primary"}
          text={"Start free trial"}
          onClick={() =>
            alert(
              `You selected the ${
                plan_key === "monthly_plan" ? "monthly" : "annually"
              } plan`
            )
          }
        />
        {plan_key === "yearly_plan" ? limitedOfferMessage() : null}
      </div>
    );
  };

  const showMoreLessButton = () => {
    return (
      <button className="toggle-button" onClick={() => setShowAll(!showAll)}>
        {showAll ? (
          <>
            <span>Show less</span>
            <ExpandLessIcon />
          </>
        ) : (
          <>
            <span>Show more</span>
            <ExpandMoreIcon />
          </>
        )}
      </button>
    );
  };

  const bestValueChip = () => {
    return <div className="best-value-chip">Best Value</div>;
  };

  const limitedOfferMessage = () => {
    return (
      <div className="limited-offer-message">
        <span>* Limited time offer until 31/12/2025</span>
      </div>
    );
  };

  const tableBodyMobile = () => {
    // get categories from plan
    const categories = Object.keys(plans[selectedPlan]);

    return (
      <tbody className="plans-table-body">
        <table>
          <tbody>
            {categories.map((category) => {
              const features = Object.keys(plans[selectedPlan][category]);

              return (
                <>
                  {/* Category row */}
                  <tr className="plans-table-category-row">
                    <td className="plans-table-category-cell">
                      {features_labels[category].label}
                    </td>
                    <td></td>
                  </tr>

                  {/* Feature rows */}
                  {features.map((feature) => {
                    const value = plans[selectedPlan][category][feature];

                    return (
                      <tr key={feature} className={"plans-table-feature-row"}>
                        <td className="plans-table-feature-cell">
                          {features_labels[category].features[feature]}
                        </td>
                        <td className={"plans-table-feature-value"}>
                          {value ? (
                            <CheckCircleIcon style={{ color: "#0a6b4b" }} />
                          ) : (
                            <RemoveIcon />
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </>
              );
            })}
          </tbody>
        </table>
      </tbody>
    );
  };

  const tableFooterMobile = () => {
    return (
      <>
        <tfoot>
          <tr className="plans-table-last-row">
            <td className="plans-table-last-row-cell">
              {selectedPlan === "no_plan"
                ? null
                : priceContainerMobile(selectedPlan)}
            </td>
          </tr>
          <tr className="plans-table-plan-selection-row-mobile">
            <td>
              <Chip
                label="Without DO+"
                color="primary"
                variant={selectedPlan === "no_plan" ? "filled" : "outlined"}
                onClick={() => setSelectedPlan("no_plan")}
              />
              <Chip
                label="Monthly Plan"
                color="primary"
                variant={
                  selectedPlan === "monthly_plan" ? "filled" : "outlined"
                }
                onClick={() => setSelectedPlan("monthly_plan")}
              />
              <Chip
                label="Annual Plan"
                color="primary"
                variant={selectedPlan === "yearly_plan" ? "filled" : "outlined"}
                onClick={() => setSelectedPlan("yearly_plan")}
              />
            </td>
          </tr>
        </tfoot>
      </>
    );
  };

  const desktopView = () => {
    return (
      <>
        <div className="plans-table-container">
          <table className="plans-table">
            {tableHead()}
            {tableBody()}
          </table>
        </div>
        {limitedOfferMessage()}
      </>
    );
  };

  const mobileView = () => {
    return (
      <>
        <div className="plans-table-container-mobile">
          <table className="plans-table-mobile">
            {tableBodyMobile()}
            {tableFooterMobile()}
          </table>
        </div>
      </>
    );
  };

  return <>{width > 430 ? desktopView() : mobileView()}</>;
}

export default PlansTable;
