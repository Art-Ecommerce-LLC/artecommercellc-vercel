"use client";

import Navbar from "../components/Navbar"
import PrivacyPolicy from "../components/Policies/PrivacyPolicyComponent"
import Footer from "../components/Footer"

export default function PrivacyPolicyPage() {

    return (
        <>  
            <Navbar isActive=""/>
            <PrivacyPolicy />
            <Footer />
        </>
    )
}