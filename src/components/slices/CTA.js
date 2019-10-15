import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Link } from "gatsby"
import { linkResolver } from '../../utils/linkResolver'

export default ({ slice }) =>
  <section>
    {slice.primary.title}
    {slice.primary.description_text}
    <Link className="cta-banner-link" to={linkResolver(slice.primary.cta_link)}>
      {slice.primary.cta_label}
    </Link>
  </section>
