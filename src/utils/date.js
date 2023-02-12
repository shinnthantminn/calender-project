function getDates(startDate, endDate) {
  const dates = [];
  let currentDate = startDate;
  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
}
const start = new Date("2022-11-10");
const end = new Date("2025-12-31");
const dates = getDates(start, end);

const assignOne = { A: "Off", B: "Morning", C: "Night", D: "Off" };
const assignTwo = { A: "Morning", B: "Off", C: "Off", D: "Night" };
const assignThree = { A: "Off", B: "Night", C: "Morning", D: "Off" };
const assignFour = { A: "Night", B: "Off", C: "Off", D: "Morning" };

let count = 1;
let i = 1;
const data = {};
const dataTable = [];

// for object
for (let i = 1; i < dates.length; i++) {
  if (count < 3) {
    data[new Date(dates[i]).toLocaleDateString()] = {
      date: dates[i],
      assign: assignOne,
    };
    count++;
  } else if (count < 5) {
    data[new Date(dates[i]).toLocaleDateString()] = {
      date: dates[i],
      assign: assignTwo,
    };
    count++;
  } else if (count < 7) {
    data[new Date(dates[i]).toLocaleDateString()] = {
      date: dates[i],
      assign: assignThree,
    };
    count++;
  } else if (count == 8) {
    data[new Date(dates[i]).toLocaleDateString()] = {
      date: dates[i],
      assign: assignFour,
    };
    count = 1;
  } else {
    data[new Date(dates[i]).toLocaleDateString()] = {
      date: dates[i],
      assign: assignFour,
    };
    count++;
  }
}

// for array
for (let i = 1; i < dates.length; i++) {
  if (count < 3) {
    dataTable.push({ date: dates[i], assign: assignOne });
    count++;
  } else if (count < 5) {
    dataTable.push({ date: dates[i], assign: assignTwo });
    count++;
  } else if (count < 7) {
    dataTable.push({ date: dates[i], assign: assignThree });
    count++;
  } else if (count == 8) {
    dataTable.push({ date: dates[i], assign: assignFour });
    count = 1;
  } else {
    dataTable.push({ date: dates[i], assign: assignFour });
    count++;
  }
}

export default data;
