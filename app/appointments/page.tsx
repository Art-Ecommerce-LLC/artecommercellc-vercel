"use client";
import NavbarComponent from "../components/Navbar"
import AppointmentsComponent from "../components/Appointments/AppointmentsComponent"
import Footer from "../components/Footer"

export default function Appointments() {

    return (
    <div className="w-full bg-[var(--dark-grey)] ">
        <NavbarComponent isActive={"Appointments"} />
        <AppointmentsComponent />
        <Footer />
    </div>
    )}