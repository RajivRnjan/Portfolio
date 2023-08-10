import React from 'react'
import { BsFillArrowUpSquareFill } from "react-icons/bs";


function GoToTop() {
    const gotoTopWindow = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      };
  return (
    <>
    <aside className="goToTopContainer">
      <button className="goTop" onClick={gotoTopWindow}>
        <span className=""><BsFillArrowUpSquareFill className="goTop-arrow"/></span>
      </button>
    </aside>
    </>
  )
}

export default GoToTop