import React from 'react'
import HyperTriggerDistanceCalculator from '../../components/tools/hyperTriggerDistance/HyperTriggerDistanceCalculator'

export default function Tools() {
  return (
    <div className="wrapper page">
      <h1 className="page__header">
        Tools
      </h1>
      <div className="page__wrapper">
        <div className="page__container">
          <div className="row">
            <h2 className="col-12">Hyperdash trigger distance calculator</h2>
          </div>
          <HyperTriggerDistanceCalculator />
        </div>
      </div>
    </div>

  )
}
