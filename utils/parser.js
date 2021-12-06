import dayjs from "dayjs";

export const parseInflationToStockChart = (data) => {
  let newTab = [];
  const histo = data.daily.histo;
  newTab.push({ name: data.component, data: [] });
  for (const date in histo) {
    if (Object.hasOwnProperty.call(histo, date)) {
      const value = histo[date];
      newTab[0].data.push([dayjs(date).valueOf(), value]);
    }
  }
  return newTab;
};
