
import type { Metadata } from 'next'
import PricingSection from '@/components/Pricing/PricingSection'

export const metadata: Metadata = {
  title : "Art Ecommerce | Pricing",
  description: "Art Ecommerce offers competitive rates with flexible payment options to accommodate various budgets. Contact me for a detailed quote tailored to your needs.",
}

export default function Pricing() {

  return (
    <>
      <PricingSection/>
    </>
  );
}
