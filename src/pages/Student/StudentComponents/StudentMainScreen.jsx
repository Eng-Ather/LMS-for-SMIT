import React from "react";

export default function StudentMainScreen() {
  return (
    <div className="grid grid-cols-2 h-screen overflow-y-scroll">
      <div className="border border-black h-96">Profile card</div>
      <div className="border border-black h-96"></div>
      <div className="border border-black h-96">Attandance Record</div>
      <div className="border border-black h-96"></div>
      <div className="border border-black h-96">Quiz Result</div>
      <div className="border border-black h-96"></div>
    </div>
  );
}
