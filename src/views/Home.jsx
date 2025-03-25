import TimeDropdown from "../Components/DropDown";
import "./Home.css";
import { Button } from "react-bootstrap";

export default function Home() {
    return  (
    <div className="w-100 d-flex align-items-center flex-column justify-content-center p-5">
    <h3 className="h3Color">What Is The Best Time To Reach You?</h3>
    <div className="row col-3 d-flex align-items-center justify-content-center mt-4">
        <form className="d-flex flex-column align-items-center w-100 mt-5">
            <TimeDropdown />
            <p style={{ fontSize: "12px" }} className="mb-4"
            >(All times are in CST)</p>
            <Button className="w-100 mb-4 p-3 btn-radious">CONTINUE </Button>
        </form>
        <div className="row col-12 d-flex  justify-space-between">
            <div className="col-4 m-0 p-0">
                <p>Terms and Conditions</p>
            </div>
            <div className="col-4 m-0 p-0">
                <p>Privacy Policy</p>
            </div>
            <div className="col-4 m-0 p-0">
                <p>California Privacy</p>
            </div>
        </div>
    </div>
    
</div>)

   
}