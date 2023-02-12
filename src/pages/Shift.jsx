import "../App.css";
import { Box, Button, Stack } from "@mui/material";
import CalendarModel from "../components/CalendarModel";
import { useParams } from "react-router-dom";
import GoTo from "../components/GoTo";
import { useState, memo, useContext } from "react";
import { Context } from "../Store/LoadingStore";

const Shift = () => {
  const { id } = useParams();

  const [date, setDate] = useState();
  const { loading } = useContext(Context);

  const handleChange = (day, month, year) => {
    setDate(`${month}/${day}/${year}`);
  };

  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100%",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
        }}
      > 
        {!loading && <GoTo handleChange={handleChange} />}
        <CalendarModel shift={id} dater={date} />
      </Box>
    </Stack>
  );
};

export default memo(Shift);
