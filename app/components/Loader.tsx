export default function Loader({refrence}:{refrence: any}) {
  return (
    <div ref={refrence} className="spinner-wrapper" >
      <div className="spinner">
        <div className="sk-folding-cube">
          <div className="sk-cube1 sk-cube"></div>
          <div className="sk-cube2 sk-cube"></div>
          <div className="sk-cube4 sk-cube"></div>
          <div className="sk-cube3 sk-cube"></div>
        </div>
      </div>
    </div>
  );
}