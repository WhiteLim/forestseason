import React from 'react'
import {style} from '../components/Style'

export default function Blog({display}) {
  return (
    <div style={display == 'pc' ? style.subpage : style.msubpage}>
      <section style={display == 'pc' ? style.codebox : style.mcodebox}>
          <div>
              Blog
          </div>
      </section>
      <section style={display == 'pc' ? style.viewbox : style.mviewbox}>
      </section>
    </div>
  )
}
