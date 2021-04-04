import React from 'react'
import HyperTriggerDistanceCalculator from '../../components/tools/hyperTriggerDistance/HyperTriggerDistanceCalculator'
import SliderVelocityCalculator from '../../components/tools/svFinder/SliderVelocityCalculator'
import SnappingSpecifier from '../../components/tools/snappingSpecifier/SnappingSpecifier'

export default function Tools() {
  return (
    <div className="wrapper page">
      <h1 className="page__header">Tools</h1>
      <div className="page__wrapper">
        <div className="page__container">
          <h2 className="col-12">Hyperdash Trigger Distance Calculator</h2>
          <HyperTriggerDistanceCalculator />
          <hr />
          <h2 className="col-12">Ideal Slider Velocity Calculator</h2>
          <SliderVelocityCalculator />
          <hr />
          <h2 className="col-12">Snapping Specifier</h2>
          <SnappingSpecifier />
        </div>
      </div>
    </div>
  )
}
