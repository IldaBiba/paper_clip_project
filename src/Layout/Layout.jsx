import { Outlet } from "react-router-dom";
import  "./Layout.css";

export default function Layout() {
    return (
      <div className=" d-flex align-items-center flex-row flex-wrap justify-content-center">
          
            <header className="  w-100 row d-flex align-items-center justify-content-between headerSpace " >

            <div className="col-6 d-flex flex-column align-items-center">
                <h3 className="nameColor bold m-0 p-0">K<span className="spanColor">/</span>NET<span className="spanColor">/</span>C</h3>
                <h6 className="m-0 p-0 bold h6fontsize spanColor">moving people</h6>
                </div>
                <div className="col-6 d-flex flex-column align-items-center">
                    <h5 className="spanColor h5fontsize bold">Talk to a Consolidation Specialist (888) 888-888 </h5>

                </div>    
              
        </header>
      
        <Outlet />
        <footer className="row col-12 d-flex align-items-center justify-content-center p-5 footerColor">
            <row className="col-8 m-3">
            <p>
             Thise site is not a part of the Facebook Inc. Additionally, Facebook does NOT endorse this site. FACEBOOK is a trademark of FACEBOOK, Inc. This site is not a part of the YouTube website or Google, LLC. Additionally, this site is NOT endorsed by  Google in any way.
            </p>

            <p>While we may provide you preliminary information on whether you qualify for compensation, your local governing body ultimately determines who qualifies and what claims are paid. This site is provided for informational purposes only. If you have questions about whether you qualify, please contact an attorney.</p>



            <p>THIS IS A PAID ATTORNEY / ADVOCATE ADVERTISEMENT.</p>

            <p>While we may provide you preliminary information on whether you may qualify for compensation, the U.S. District Court: Eastern District of North Carolina ultimately determines who qualifies and what claims are paid. This site is provided for informational purposes only. If you have questions about whether you qualify, please contact an attorney.</p>

            <p>This website uses Google Analytics and Google Ads to track your journey for marketing purposes. If you wish to opt-out of user-tracking click here.</p>
            </row>
           
        </footer>
      </div>
    );
}