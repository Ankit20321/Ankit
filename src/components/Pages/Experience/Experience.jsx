import React from 'react';
import './experience.css';
import line101 from './line-10-1.svg';
import chevron from './double-chevron-right-1.png'

const Experience = () => {
  return (
    <div className='desktop5'>
      <div className="overlap5">
      <div className="group-16">
          <div className="overlap-8">
            <div className="my-experience">MY EXPERIENCE</div>
            <div className="group-17">
              <div className="overlap-group-5">
                <img
                  className="double-chevron-right"
                  alt="Double chevron right"
                  src={chevron}
                />
                <div className="overlap-group-6">
                  <div className="text-wrapper-18">IIT Indore</div>
                  <img className="line-9" alt="Line" src={line101} />
                </div>
                <div className="text-wrapper-19">Research Analyst</div>
                <div className="text-wrapper-20">Aug 2022-Oct 2022</div>
                <p className="text-wrapper-21">
                  I am designing a simple website having similar homepage that of Netflix using using HTML, CSS and
                  JavaScript.
                </p>
              </div>
            </div>
            <div className="group-18">
              <div className="overlap-group-5">
                <img
                  className="double-chevron-right"
                  alt="Double chevron right"
                  src={chevron}
                />
                <div className="overlap-group-6">
                  <div className="text-wrapper-18">Oasis Infobyte</div>
                  <img className="line-9" alt="Line" src={line101} />
                </div>
                <div className="text-wrapper-19">Website Developer</div>
                <div className="text-wrapper-22">January-Feburary</div>
                <p className="text-wrapper-21">I had designed a website of</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience