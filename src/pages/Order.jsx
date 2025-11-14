import React from "react"
import OrderPage from "../components/OrderPage.jsx"
import FadeInSection from "../components/FadeInSection.jsx"

export default function Order() {
  return (
    <div className="app">
      <FadeInSection>
        <OrderPage />
      </FadeInSection>
    </div>
  )
}


