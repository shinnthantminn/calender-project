import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import data from "../utils/DataTable";

const Home = () => {
  const [loadMore, setLoadMore] = useState({
    count: 40,
    con: true,
  });
  const [shift, setShift] = useState(null);
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

  const objLoop = (x, assignTime) => {
    for (let k in x[0].assign) {
      if (x[0].assign[k] === assignTime) {
        console.log(k);
        setShift(k);
      }
    }
  };

  useEffect(() => {
    const date = new Date();
    const utcTime = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
    const uaeTime = new Date(utcTime + 60 * 60 * 1000 * 4);
    const currentTime = uaeTime.getHours();

    const finder = data.filter(
      (i) =>
        new Date(i.date).toLocaleDateString() == new Date().toLocaleDateString()
    );

    if (currentTime >= 7 && currentTime < 19) {
      setText("Currently, Shift");
      objLoop(finder, "Morning");
      setText2("is working till 7pm");
    } else {
      setText("Currently, Shift");
      objLoop(finder, "Night");
      setText2("is working till 7am");
    }
  }, []);

  const date = data.filter((i) => {
    let tomorrow = new Date(i.date).getTime() + 24 * 60 * 60 * 1000;
    return new Date(tomorrow).getTime() >= new Date().getTime();
  });

  date.splice(loadMore.count, data.length - 1);

  const handleLoadMore = () => {
    setLoadMore((pre) => ({ ...pre, count: pre.count + 30 }));
  };

  useEffect(() => {
    if (
      new Date(date[date.length - 1].date).getTime() ===
      new Date(data[data.length - 1].date).getTime()
    ) {
      setLoadMore((pre) => ({ ...pre, con: false }));
    }
  }, [loadMore.count]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: "0px",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "white", marginBottom: "10px" }} className='shiftText'>
        {text} - {shift} {text2}
      </h1>
      <table className="shiftSheet ">
        <thead className="sticky">
          <tr>
            <th>Date</th>
            <th>Shift A</th>
            <th>Shift B</th>
            <th>Shift C</th>
            <th>Shift D</th>
          </tr>
        </thead>
        <tbody>
          {date.map((i, index) => (
            <tr key={index} className={index === 0 ? "highlight" : ""}>
              <td style={{ display: "flex", justifyContent: "start" }}>
                <p style={{ width: "100px" }}>
                  {new Date(i.date)
                    .toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })
                    .replace(/ /g, "-")}
                </p>
                <p>
                  {new Date(i.date).toLocaleDateString("us", {
                    weekday: "short",
                  })}
                </p>
              </td>
              <td>{i.assign.A}</td>
              <td>{i.assign.B}</td>
              <td>{i.assign.C}</td>
              <td>{i.assign.D}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {loadMore.con && (
        <Button
          onClick={handleLoadMore}
          variant="contained"
          sx={{
            bgcolor: "#20a4f3",
            textTransform: "capitalize",
            mt: '10px'
          }}
        >
          Load More
        </Button>
      )}
    </Box>
  );
};

export default Home;
