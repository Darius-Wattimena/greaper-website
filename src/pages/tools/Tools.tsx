import React from 'react'
import HyperTriggerDistanceCalculator from '../../components/tools/hyperTriggerDistance/HyperTriggerDistanceCalculator'
import SliderVelocityCalculator from "../../components/tools/svFinder/SliderVelocityCalculator";

export default function Tools() {
  return (
    <div className="wrapper page">
      <h1 className="page__header">Tools</h1>
      <div className="page__wrapper">
        <div className="page__container">
          <h2 className="col-12">Hyperdash Trigger Distance Calculator</h2>
          <HyperTriggerDistanceCalculator />
          <hr />
          <h2 className="col-12">Ideal Base SV Calculator</h2>
          <SliderVelocityCalculator />
        </div>
      </div>
    </div>
  )
}
