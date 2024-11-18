'use client'
// import Loader from "@/components/Loader";

export default function Loading() {
  return (
    <div>
      {/* <Loader /> */}
      <div className="spinner-wrapper" >
        <div className="spinner">
          <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
