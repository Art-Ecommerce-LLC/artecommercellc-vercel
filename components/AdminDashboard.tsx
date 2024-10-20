"use client";

import AppointmentsComponent from "./form/CreateAppointmentsForm";
import DeleteAppointmentsCompomnent from "./form/DeleteAppointmentsForm";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen min-w-screen">
      {/* Main Content */}
      <div className="flex flex-col w-full h-full items-center" >
          <h1 className="text-4xl"> Create Appointments</h1>
          <AppointmentsComponent  />
        </div>
    </div>
  );
}
