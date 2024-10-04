
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";


export default function AppointmentsComponent() {

    const isAppointmentRef = useRef(null);
    const isAppointmentInView= useInView(isAppointmentRef, { once: true });

    // This is the Appointments component.
    return (
        // List of appointments
        <div className="w-full bg-[var(--dark-grey)] min-h-[90vh] flex flex-col justify-center items-center min-w-[320px] w-90vw">
            <motion.div
                ref={isAppointmentRef}
                className="w-1/2 mr-4 lg:w-auto flex flex-col justify-center items-center mt-0 lg:mt-0 bg"
                initial={{ opacity: 0, x: -100 }}
                animate={isAppointmentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                >
                <div className="relative w-[225px] h-[225px] sm:w-[225px] sm:h-[225px] lg:w-[225px] lg:h-[225px] rounded-full overflow-hidden border-4 border-indigo-600 shadow-lg mb-2 ">
                    <Image
                    src="/hirezheadshot.jpg"
                    alt="Ben Myers"
                    className="object-cover"
                    height={500}
                    width={500}
                    priority
                    />
                </div>
            </motion.div>
            <motion.div
                className="flex flex-col items-start bg-[rgba(255,255,255,0.05)] border-l-4 border-indigo-600 rounded-lg p-6 shadow-lg hover:shadow-indigo-600/50 transition-shadow hover:scale-105 transform min-w-[225px] w-1/2 "
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                >
                <h1>Appointments</h1>
                <ul>
                    <li>Appointment 1</li>
                    <li>Appointment 2</li>
                    <li>Appointment 3</li>
                </ul>
            </motion.div>
        </div>
    );
}