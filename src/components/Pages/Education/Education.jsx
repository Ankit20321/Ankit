import React from 'react'
import './education.css';
import line7 from './line-7.svg';
import line8 from './line-8.svg';
import line9 from './line-9.svg';
import vector8 from './vector-8.svg';
import "../Certification/Certification.css";
const Education = () => {
  return (
    <div className='desktop4'>
      <div className='overlap3'>
      <div className="my-education">MY EDUCATION</div>
      <div className="group-15">
        <div className="certification-scroller">
          <div className="overlap-7">
            <div className="rectangle-6" />
            <p className="text-wrapper-12">
              Bachelor in Technology in Computer Science and Engineering - Data Science: 7.97 (CGPA)
            </p>
            <p className="text-wrapper-13">Higher Secondary (12th State Board):- 72.8 %</p>
            <p className="text-wrapper-14">Senior Secondary (10th State Board):- 85.4%</p>
            <p className="acropolis-institute">ACROPOLIS INSTITUTE OF TECHNOLOGY AND RESEARCH, INDORE</p>
            <div className="vidyasagar-school">Mount Carmel H.S. School, INDORE</div>
            <div className="pratibhasthali">Mount Carmel H.S. School, Indore</div>
            <div className="text-wrapper-15">2020-2024</div>
            <div className="text-wrapper-16">2019-2020</div>
            <div className="text-wrapper-17">2017-2018</div>
            <div className="ellipse" />
            <div className="ellipse-2" />
            <div className="ellipse-3" />
            <img className="line-6" alt="Line" src={line7} />
            <img className="line-7" alt="Line" src={line8} />
            <img className="line-8" alt="Line" src={line9} />
            <img className="vector-7" alt="Vector" src={vector8} />
            <img className="vector-8" alt="Vector" src={vector8} />
            <img className="vector-9" alt="Vector" src={vector8} />
          </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Education