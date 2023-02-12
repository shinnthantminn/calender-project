import {
  useEffect,
  useState,
  memo,
  useContext,
  useCallback,
  useRef,
} from "react";
import Calendar from "react-calendar";
import { Context } from "../Store/LoadingStore";

// date
import date from "../utils/date";
import ColorHighlight from "./ColorHighlight";
import Button from "@mui/material/Button";

const CalendarModel = ({ shift, dater }) => {
  const [value, setValue] = useState(null);
  const [newValue, setNewValue] = useState(null);
  const newDate =
    !isNaN(value) && !isNaN(newValue) ? newValue : [value[1], value[0]];
  const [count, setCount] = useState(null);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [active, setActive] = useState(new Date());
  const [show, setShow] = useState(true);
  const { loading, handleStopLoading } = useContext(Context);

  // console.log(dater);

  function countDays(date1, date2) {
    // Convert both dates to milliseconds
    var date1Ms = date1.getTime();
    var date2Ms = date2.getTime();

    // Calculate the difference in milliseconds
    var differenceMs = date2Ms - date1Ms;

    // Convert back to days and return
    return Math.round(differenceMs / (1000 * 60 * 60 * 24));
  }

  const handleChange = (date) => {
    console.log(date);
    const startDay = new Date(date[0]);
    const endDay = new Date(date[1]);
    console.log("change");

    setStart(
      startDay.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    );
    setEnd(
      endDay.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    );
    setCount(countDays(startDay, endDay));
    setValue(date);
    console.log(newDate);
  };

  const handleManageData = (param) => {
    if (show) {
      const finder = date[new Date(param.date).toLocaleDateString()];
      const shifts = {
        Off: "#ffee32",
        Morning: "#6fffe9",
        Night: "#e71d36",
      };
      return (
        <ColorHighlight
          active={"react-calendar__month-view__days__day"}
          bgColor={shifts[finder?.assign[shift]]}
          shift={finder?.assign[shift]}
        />
      );
    }
  };

  const handleClear = () => {
    // const activeDiv = clear.current.getElementsByClassName('.react-calendar__tile--active')
    // console.log(activeDiv)
    // activeDiv.classList.remove(className)
    setValue(null);
    setStart("____");
    setCount("0");
    setEnd("____");
  };

  useEffect(() => {
    if (dater) {
      setNewValue(new Date(dater));
    }
  }, [dater]);

  useEffect(() => {
    handleStopLoading();
  }, [shift, handleManageData]);

  const handleViewChange = ({ action, activeStartDate, value, view }) => {
    console.log(action, activeStartDate, value, view);
    if (view !== "month") {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  // const handleStartDateChange = (date) => {
  //   setValue(date[1])
  // }

  return (
    <>
      {loading ? (
        <div className="loading">
          <h1>Loading</h1>
        </div>
      ) : (
        <>
          <Calendar
            onChange={handleChange}
            value={newDate}
            goToRangeStartOnSelect={false}
            // goToRangeEndOnSelect
            tileContent={handleManageData}
            // onActiveStartDateChange={handleStartDateChange}
            selectRange={true}
            maxDate={new Date("12-31-2025")}
            minDate={new Date("1-1-2023")}
            onViewChange={handleViewChange}
            showNeighboringMonth
          />
          <div style={{ marginTop: "50px" }} className="daycountCon">
            <p style={{ color: "#ffffff90" }}>
              <span className="shiftDisplay">From</span>
              <span className="selectedDateShow">
                {start ? start : "_____"}
              </span>
              <span className="shiftDisplay">To</span>
              <span className="selectedDateShow">{end ? end : "_____"}</span>
              <span className="shiftDisplay">Total</span>
              <span className="selectedDateShow">
                {count ? count : "0"} days
              </span>
            </p>
            <Button variant="contained" onClick={handleClear}>
              Clear Selection
            </Button>
          </div>
        </>
      )}
    </>
  );
};
export default memo(CalendarModel);
