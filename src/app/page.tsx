"use client";
import { Silder } from "@/components/home/HomeBanner";
import Navbar from "@/components/home/Navbar";
import React, { useState } from "react";

const Home = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <main>
      <Navbar setShowCart={setShowCart}></Navbar>
      <Silder></Silder>
      {/* <Cart setShowCart={setShowCart} /> */}
    </main>
  );
};

export default Home;
