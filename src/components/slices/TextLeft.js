import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../../utils/linkResolver'

function renderItems(slice) {
  return slice.fields.map((item, index) =>
    <div key={index} className="numeroted-items-item-wrapper">

    </div>
  )
}
export default ({ slice }) =>
  <section>
    <div className="l-wrapper">
      <header className="numeroted-items-header">
        <div className="numeroted-items-header-title">

        </div>
      </header>
    </div>
    <div className="numeroted-items-items-wrapper">
      {renderItems(slice)}
    </div>
  </section>
