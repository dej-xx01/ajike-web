import { useState } from "react"
import arrow from "../assets/images/arrow.png"
import Bisola from "../assets/images/bisola.jpg"
const About = () =>{
    const [overflow, setOverflow] = useState(false)
    const moreBtn = () => {
        setOverflow(!overflow)
    }
    return(
        <>
            {/* {!menuClicked && (<div className="  border border-blue-500 absolute top-20 inset-x-0">
                <img src= {Bisola} alt="bisola-image" className="w-10 "/>
            </div>)}         */}
            {/* <div className="  border border-blue-500 absolute top-20 inset-x-0 flex flex-col w-1/2 items-center justify-center"> */}
            <div className=" min-h-screen pt-20">
                <div className="flex flex-col px-5 gap-y-4">
                    <img src= {Bisola} alt="bisola-image" className="h-100"/>
                    <div className={` flex justify-around ${!overflow ? "h-32 overflow-hidden" : ""}`}>
                        <div>
                            <h2 className="feature">Height</h2>
                            <h2 className="feature">Bust</h2>
                            <h2 className="feature">Waist</h2>
                            <h2 className="feature">Hips</h2>
                            <h2 className="feature">Shoe</h2>
                            <h2 className="feature">Skin Tone</h2>
                            <h2 className="feature">Eye Color</h2>
                        </div>
                        <div>
                            <h2 className="value ">174cm</h2>
                            <h2 className="value ">79cm</h2>
                            <h2 className="value ">64cm</h2>
                            <h2 className="value ">94cm</h2>
                            <h2 className="value ">41US</h2>
                            <h2 className="value ">Dark</h2>
                            <h2 className="value ">Brown</h2>
                        </div>
                    </div>
                    <div onClick={moreBtn} className="flex justify-center gap-x-1">
                        <img src={arrow} alt="arrow" />
                        <h2 className="text-white">{overflow? "Less" : "More"}</h2>
                    </div>
                    <p className="text-gray-400 italic font-serif mt-6 text-[16px]">Lagos, Nigeria</p>
                    {/* <button className="text-white border border-b-amber-200" ></button>                   */}
                </div>

            </div>
        </>

    )
}

export default About