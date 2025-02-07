"use client"

import { useState } from "react"
const DesCard = ({ item }: { item: any }) => {
    const [readMore, setReadmore] = useState(false)
    return (
        <div className="">
            <div className=" mt-5">
                <h1 className="title-text-sm">{item?.title}</h1>
                <p data-aos="fade-up" className=" mt-2 leading-7">
                    {
                        !readMore ?
                            item?.descriptions.substring(0, 500) : item?.descriptions
                    }
                    {
                        !readMore && "... ... ..."
                    }
                </p>
                <button onClick={() => setReadmore(!readMore)}>{!readMore ? "Read more" : "Less"}</button>
            </div>
        </div>
    )
}

export default DesCard
