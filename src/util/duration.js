import _ from "lodash";
import moment from "moment";

export function lastWeek(items) {
  let lastWeekStartDate = moment()
    .startOf("day")
    .subtract(1, "week")
    .format("YYYY-MM-DD");

  let lastWeekEndDate = moment()
    .endOf("day")
    .subtract(1, "day")
    .format("YYYY-MM-DD");

  return _.filter(items, function (each) {
    let item = moment(each.createdAt).format("YYYY-MM-DD");

    return moment(item).isBetween(
      lastWeekStartDate,
      lastWeekEndDate,
      undefined,
      "(]"
    );
  });
}

export function lastMonth(items) {
  const lastMonthStartDate = moment()
    .startOf("month")
    .subtract(1, "month")
    .format("YYYY-MM-DD");

  const lastMonthEndDate = moment(lastMonthStartDate)
    .endOf("month")
    .format("YYYY-MM-DD");

  return _.filter(items, function (each) {
    let searchMoment = moment(each.createdAt).format("YYYY-MM-DD");

    return moment(searchMoment).isBetween(
      lastMonthStartDate,
      lastMonthEndDate,
      undefined,
      "[]"
    );
  });
}
