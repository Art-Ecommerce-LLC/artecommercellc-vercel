"use client";

import Navbar from "../components/Navbar"
import TermsOfService from "../components/Policies/TermsOfServiceComponent"
import Footer from "../components/Footer"

export default function TermsOfServicePage() {

    return (
        <>  
            <Navbar isActive=""/>
            <TermsOfService />
            <Footer />
        </>
    )
}