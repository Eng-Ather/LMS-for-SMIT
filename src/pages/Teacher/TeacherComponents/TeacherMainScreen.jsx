import React from "react";

export default function TeacherMainScreen() {
  const batches = [
    {
      batchName: "Batch 11",
      timeSlot: "10:00 AM - 12:00 PM",
      campusName: "Gulshan",
      classroomName: "Audi I",
    },
    {
      batchName: "Batch 12",
      timeSlot: "12:30 PM - 2:30 PM",
      campusName: "Bahadurabad",
      classroomName: "Audi II",
    },
    {
      batchName: "Batch 13",
      timeSlot: "3:00 PM - 5:00 PM",
      campusName: "Ali Muhammad",
      classroomName: "Room A1",
    },
    {
      batchName: "Batch 14",
      timeSlot: "5:30 PM - 7:30 PM",
      campusName: "Gulshan",
      classroomName: "Room B2",
    },
    {
      batchName: "Batch 15",
      timeSlot: "8:00 AM - 10:00 AM",
      campusName: "Bahadurabad",
      classroomName: "Audi III",
    },
    {
      batchName: "Batch 16",
      timeSlot: "6:00 PM - 8:00 PM",
      campusName: "Ali Muhammad",
      classroomName: "Room C3",
    },
  ];

  return <div className="h-screen overflow-y-scroll"></div>;
}
