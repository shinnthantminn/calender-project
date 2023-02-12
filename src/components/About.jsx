import CancelIcon from "@mui/icons-material/Cancel";
import { useRef } from "react";
import img from '../../public/img/dev1.jpg'

const About = ({ display, handleAllClose }) => {
  const ref = useRef();
  const handleClick = () => {
    if (display) {
      ref.current.style.display = "none";
    } else {
      ref.current.style.display = "flex";
    }

    handleAllClose();
  };
  return (
    <div className="abtAndModalContainer " ref={ref}>
      <div className="about-container centerDiv">
        <div>
          <CancelIcon
            onClick={handleClick}
            style={{
              display: "flex",
              justifyContent: "end",
              position: "absolute",
              top: '6%',
              right: '6%',
              cursor: "pointer",
            }}
          />
          <div style={{
            marginTop: '60px',
            display: 'flex',
            justifyContent: 'center',
          }}>
            <div style={{
              position: 'relative',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0 40%',
            }} className='reduceImgBoxSize'>
              <img style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
                backgroundPosition: '0 40%',
                // borderRadius: '25px'
              }} src={img} alt="dev" />
            </div>
          </div>
          <div style={{
            padding: '10px 40px',
          }} className={'deleteP'}>
            <h2 style={{ marginTop: '30px', marginBottom: '30px' }} >Developed and managed by <br /> <b>Pyay Hein SN#2582</b> </h2>
            <h2>
              Contact mail :
              <a style={{ marginLeft: '10px' }} href="mailto:pyayhein@gmail.com">pyayhein@gmail.com</a>
            </h2>
            <p style={{ marginTop: '50px' }}>Version 1.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
