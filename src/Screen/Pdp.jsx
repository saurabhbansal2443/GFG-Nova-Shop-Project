import React from "react";
import { Link } from "react-router";
import Navbar from "../Components/Navbar";
import PdpComponent from "../Components/PdpComponent";
import { useParams } from "react-router";

const Pdp = () => {
  const { productId } = useParams();

  return (
    <>
      <Navbar />
      <PdpComponent id={productId} />
    </>
  );
};

export default Pdp;
