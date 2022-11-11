import React from "react";

import { VscLoading } from "react-icons/vsc";

function Loading() {
  return (
    <div className="flex justify-center animate-spin text-3xl mt-64 ">
      <VscLoading />
    </div>
  );
}

export default Loading;
