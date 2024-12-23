import React from "react";

export default function NewAnnoucements() {
  return (
    <>
      <h1 className="text-center p-4">Events Happening Soon!</h1>
      <div className="grid grid-cols-2 h-screen overflow-y-scroll text-2xl">
        <div className="h-96 border border-black"></div>
        <div className="h-96 border border-black"></div>
        <div className="h-96 border border-black"></div>
        <div className="h-96 border border-black"></div>
      </div>
    </>
  );
}
