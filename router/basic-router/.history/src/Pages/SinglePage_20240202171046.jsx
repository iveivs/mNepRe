import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

const SinglePage = () => {
    const {id} = useParams()
    return (
        <div>
            {id}
        </div>
    )
}
export {SinglePage}