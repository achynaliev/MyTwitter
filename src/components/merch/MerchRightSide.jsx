import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddMerchModal from "../merch/AddMerchModal";
import MerchCardList from "./MerchCardList";
import { useParams } from "react-router";
import { borderColor } from "@mui/system";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { merchContext } from "../../contexts/MerchContext";

const MerchRightSide = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loc, setLoc] = useState("all");
  const params = useParams();
  // console.log(params);
  const { getAllMerch, merchCountInCart } = useContext(merchContext)

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

  return (
    <div className="rightSideMerch">
      <div className="merchNavbar">
        <h2>Merchandise</h2>
        <div className="m-n">
          <Button
            sx={{ fontSize: 15, height: "32px", marginRight: "20px" }}
            variant="contained"
            onClick={handleOpen}
          >
            Add
          </Button>
          <Link to="/cart">

            <Badge badgeContent={merchCountInCart} color="error">
              <ShoppingCartIcon sx={{ fontSize: 31 }} />
            </Badge>
          </Link>

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
