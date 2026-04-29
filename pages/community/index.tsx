"use client";
import { useState } from "react";
import withLayoutBasic from "../../libs/components/layout/LayoutBasic";

const Community: NextPage = () => {
  console.log("COMMUNITY COMPONENT - PAGES ROUTER");

  const [title, setTitle] = useState<string>("hello");
  return (
    <div>
      Community{" "}
      <button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}>
        PressMe
      </button>
    </div>
  );
};

export default withLayoutBasic(Community) ;
