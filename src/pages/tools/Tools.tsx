import React, { useState } from 'react'
import HyperTriggerDistanceCalculator from '../../components/tools/hyperTriggerDistance/HyperTriggerDistanceCalculator'
import SliderVelocityCalculator from '../../components/tools/svFinder/SliderVelocityCalculator'
import SnappingSpecifier from '../../components/tools/snappingSpecifier/SnappingSpecifier'
import NumberInput from '../../components/form/NumberInput'
import CustomSnapChecker from '../../components/tools/customSnapChecker/CustomSnapChecker'
import CheckboxInput from '../../components/form/CheckboxInput'

export default function Tools() {
  const [bpm, setBpm] = useState<number>(180)

  return (
    <div className="wrapper page">
      <h1 className="page__header">Tools</h1>
      <div className="page__wrapper">
        <div className="page__container">
          <div className="row">
            <h2 className="col-12">Settings</h2>
            <div className="row">
              <div className="col-6">
                <form className="row" onSubmit={event => event.preventDefault()}>
                  <NumberInput
                    id="bpm"
                    label="BPM (between 1 and 600)"
                    initialValue={bpm.toString()}
                    numberSetter={setBpm}
                    min={1}
                    max={600}
                  />
                </form>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <h2 className="col-12">Hyperdash Trigger Distance Calculator</h2>
            <HyperTriggerDistanceCalculator bpm={bpm} />
          </div>
          <hr />
          <div className="row">
            <h2 className="col-12">Ideal Slider Velocity Calculator</h2>
            <SliderVelocityCalculator bpm={bpm} />
          </div>
          <hr />
          <div className="row">
            <h2 className="col-12">Snapping Specifier</h2>
            <SnappingSpecifier bpm={bpm} />
          </div>
          <hr />
          <div className="row">
            <h2 className="col-12">Custom Snap Checker</h2>
            <CustomSnapChecker bpm={bpm} />
          </div>
        </div>
      </div>
    </div>
  )
}
