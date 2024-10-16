"use client";

import AppointmentsComponent from "./form/CreateAppointmentsForm";
import DeleteAppointmentsCompomnent from "./form/DeleteAppointmentsForm";

export default function AdminDashboard() {
  return (
    <div className="flex h-screen w-screen">
      {/* Main Content */}
      <div className="flex flex-col w-full h-full items-center bg-primary">
          <h1 className="text-4xl"> Create Appointments</h1>
          <AppointmentsComponent  />
          <h1 className="text-4xl">Delete Appointments</h1>
          <DeleteAppointmentsCompomnent />
        </div>
    </div>
  );
}
