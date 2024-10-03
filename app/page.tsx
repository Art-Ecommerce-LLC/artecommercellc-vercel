import type { Metadata } from 'next'
import HomeComponent from './components/Home/HomeComponent'

export const metadata: Metadata = {
  title : "Art Ecommerce-Homepage",
  description: "Art Ecommerce offers a wide range of services to help you build a strong online presence. Contact me to learn more about how I can help you achieve your goals.",
}

export default function Home() {

  return (
    <>
      <HomeComponent/>
    </>
  );
}
