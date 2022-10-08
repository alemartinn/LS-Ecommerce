import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeAlert } from "../features/alert/alertSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import "../styles/Alert.css"

export default function Alert() {
    const { message, success } = useSelector(state => state.alert)
    const {light} = useSelector(state=>state.color)
    const [loadBar, setLoadBar] = useState("")
    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(() => {
            setLoadBar("loading")
        },5)
        setTimeout(() => {
            dispatch(closeAlert())
        },8000)
    },[])
    return (
        <div className={"alert-container " +
            (success ? "" : "wrong ") +
            (!light && "dark")}>
            <div className="alert-content">
                <p className="alert-message">{message}</p>
            </div>
            <button className="alert-close"
                onClick={() => dispatch(closeAlert())}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <div className={"alert-bar " + loadBar} />
        </div>
    )
}