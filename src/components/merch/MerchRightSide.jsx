import React, { useContext } from "react";
import { Button } from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import AddMerchModal from "../merch/AddMerchModal";
import MerchCardList from "./MerchCardList";
import { useParams } from "react-router";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { merchContext } from "../../contexts/MerchContext";
import "./merch.css";

const MerchRightSide = () => {
  const [open, setOpen] = React.useState(false);
  const { merchCountInCart } = useContext(merchContext);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const params = useParams();

  function styleLine(myLoc) {
    if (params.category === myLoc) {
      return {
        textDecoration: "none",
        color: "white",
        borderBottomWidth: "1.5px",
        borderBottomColor: "white",
        borderBottomStyle: "solid",
      };
    } else {
      return { textDecoration: "none", color: "white" };
    }
  }

  <IconButton size="large" aria-label="show 4 new mails" color="inherit">
    <Badge badgeContent={2} color="error">
      <ShoppingCart />
    </Badge>
  </IconButton>;

  return (
    <div className="rightSideMerch">
      <div className="merchNavbar">
        <h2 className="MerchHeaderText">Merchandise</h2>
        <div className="m-n">
          <Button
            sx={{
              fontSize: 15,
              height: "32px",
              marginRight: "20px",
              marginTop: "12px",
            }}
            variant="contained"
            onClick={handleOpen}
          >
            Add
          </Button>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={merchCountInCart} color="error">
              <ShoppingCart sx={{ fontSize: 28 }} />
            </Badge>
          </IconButton>
          <AddMerchModal handleClose={handleClose} open={open} />
        </div>
      </div>

      <div className="categories">
        <Link to="/products/all" style={styleLine("all")}>
          <h4> All </h4>
        </Link>
        <Link to="/products/t-shirt" style={styleLine("t-shirt")}>
          <h4>T-Shirt</h4>
        </Link>
        <Link to="/products/cap" style={styleLine("cap")}>
          <h4>Cap</h4>
        </Link>
        <Link to="/products/scarf" style={styleLine("scarf")}>
          <h4>Scarf</h4>
        </Link>
      </div>

      <div className="merchCard">
        <MerchCardList />
      </div>
    </div>
  );
};

export default MerchRightSide;
