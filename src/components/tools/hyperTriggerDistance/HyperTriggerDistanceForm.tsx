import React from 'react'

export default function HyperTriggerDistanceForm() {
  return (
    <div className="note-col">
      <p className="note">
        <ul>
          <li>
            <strong className="fake-bold">Decimal numbers work for all fields.</strong> For
            example 4.5 for circle size.
          </li>
          <li>
            <strong className="fake-bold">Osu Pixels can be 1 pixel off.</strong> The current
            version of osu stable seems to cast to an integer with hyperdash generation but
            calculations here are done using ms values, not based of snapping like is done in the
            editor.
          </li>
          <li>
            <strong className="fake-bold">X Distance is an estimate.</strong> The current version
            of osu stable does some strange roundings, the purpose of this value is to give you
            somewhat of an idea what value to use for your hyperdashes.
          </li>
        </ul>
      </p>
    </div>
  )
}
