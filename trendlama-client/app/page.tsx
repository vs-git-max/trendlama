import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="Featured Product" fill />
      </div>
    </div>
  );
};

export default Home;
