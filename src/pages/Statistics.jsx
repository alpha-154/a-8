import React, { useEffect } from "react";

function Statistics() {
  useEffect(() => {
    document.title = "Statistics - Gadget Heaven";
  }, []);
  return (
    <div className="mt-5 w-full flex flex-col items-center gap-5 overflow-x-clip">
      <div className="min-h-[350px] min-w-[1100px] bg-purple-500 text-white  rounded-xl">
        <div className="min-h-[300px] flex flex-col justify-center items-center gap-5">
          <h1 className="text-3xl font-bold">Statistics</h1>
          <p className="max-sm:max-w-md max-w-lg text-xl text-center">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-purple-500">No Data to Show</h1>
      </div>
    </div>
  );
}

export default Statistics;
