import { Stack } from "@mui/system";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useState, useContext } from "react";
import { Button, Collapse, List, ListItemButton } from "@mui/material";
import Modal from "./Modal";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import About from "./About";
import { Context } from "../Store/LoadingStore";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [about, setabout] = useState(false);
  const [modal, setmodal] = useState(false);

  const { loading, handleStartLoading } = useContext(Context);

  const handleClick = (e) => {
    setOpen(!open);
    setabout(false);
    setmodal(false);
  };

  const handleAllClose = () => {
    setOpen(false);
    setabout(false);
    setmodal(false);
    handleStartLoading();
  };

  const handleAllClose2 = () => {
    setOpen(false);
    setabout(false);
    setmodal(false);
  };

  const openModal = () => {
    setmodal(true);
    setabout(false);
  };

  const openAbout = () => {
    setabout(true);
    setmodal(false);
  };

  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          width: "100vw",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: "30px",
          position: "sticky",
          top: "0%",
          zIndex: "3",
          bgcolor: "#011627",
        }}
        className="start"
      >
        <NavLink
          to={"/"}
          onClick={handleAllClose}
          style={{ textDecoration: "none" }}
        >
          <Typography variant="body2" className="link" color="initial">
            <span style={{ padding: 0, color: "#f6f7f8" }}>Home</span>
          </Typography>
        </NavLink>
        <NavLink
          onClick={handleAllClose}
          to={"/shift/A"}
          style={{ textDecoration: "none" }}
        >
          <Typography variant="body2" className="link" color="initial">
            <span style={{ padding: 0, color: "#f6f7f8" }}>
              <span className="shiftDisplay">Shift </span> A
            </span>
          </Typography>
        </NavLink>
        <NavLink
          onClick={handleAllClose}
          to={"/shift/B"}
          style={{ textDecoration: "none" }}
        >
          <Typography variant="body2" className="link" color="initial">
            <span style={{ padding: 0, color: "#f6f7f8" }}>
              <span className="shiftDisplay">Shift </span> B
            </span>
          </Typography>
        </NavLink>
        <NavLink
          onClick={handleAllClose}
          to={"/shift/C"}
          style={{ textDecoration: "none" }}
        >
          <Typography variant="body2" className="link" color="initial">
            <span style={{ padding: 0, color: "#f6f7f8" }}>
              <span className="shiftDisplay">Shift </span> C
            </span>
          </Typography>
        </NavLink>
        <NavLink
          onClick={handleAllClose}
          to={"/shift/D"}
          style={{ textDecoration: "none" }}
        >
          <Typography variant="body2" className="link" color="initial">
            <span style={{ padding: 0, color: "#f6f7f8" }}>
              <span className="shiftDisplay">Shift </span> D
            </span>
          </Typography>
        </NavLink>

        <List
          sx={{
            width: "100%",
            maxWidth: 100,
            height: "40px",
            borderRadius: "20px",
            // bgcolor: "#caf0f8",
            padding: "0px",
            position: "absolute",
            right: "2%",
          }}
          className="more"
          component="nav"
          aria-labelledby="subheader"
        >
          <ListItemButton onClick={handleClick}>
            <Typography
              sx={{ p: 0 }}
              variant="body2"
              className="link"
              // color="initial"
            >
              <span style={{ padding: 0, color: "#f6f7f8" }}>More</span>
            </Typography>
            {open ? (
              <ExpandLess style={{ padding: 0, color: "#f6f7f8" }} />
            ) : (
              <ExpandMore style={{ padding: 0, color: "#f6f7f8" }} />
            )}
          </ListItemButton>
          <Collapse
            style={{ backgroundColor: "white" }}
            in={open}
            timeout="auto"
            unmountOnExit
          >
            <List component="div">
              <ListItemButton onClick={openModal}>
                <Typography
                  sx={{ p: 0 }}
                  variant="body2"
                  className="link"
                  color="initial"
                >
                  Disclaimer
                </Typography>
              </ListItemButton>
              <ListItemButton onClick={openAbout}>
                <Typography
                  sx={{ p: 0 }}
                  variant="body2"
                  className="link"
                  color="initial"
                >
                  About
                </Typography>
              </ListItemButton>
            </List>
          </Collapse>
        </List>

        {modal ? (
          <Modal display={modal} handleAllClose={handleAllClose2} />
        ) : (
          ""
        )}
        {about ? (
          <About display={about} handleAllClose={handleAllClose2} />
        ) : (
          ""
        )}

        {/* {shifts.map(({ name }, index) => {
      <Link
        to={`/shift/${name}`}
        style={{ textDecoration: "none" }}
        key={index}
      >
        {console.log(name)}
        <Typography variant="body2" className="link" color="initial">
          {name}
        </Typography>
      </Link>;
    })} */}
      </Stack>
    </>
  );
};

export default NavBar;
