'use strict'
import React from 'react'
import Link from 'next/link'

const renderSkills = (items) => {
  return items.map((item) =>
    <div className="rel-skills__col" key={ item.skill }>
      <Link as={ `hire-${item.skill}-developers` } href={ `/hire?title=${item.skill}` } >
        <a className="rel-skills__link">
          <span className="rel-skills__label">
            { item.skill } <br /> Developers
          </span>
        </a>
      </Link>
    </div>
  )
}

const RelSkills = (props) => (
  <section className="rel-skills">
		<div className="wrap">
			<div className="rel-skills__row">
				{ renderSkills(props.RelSkills) }
			</div>
		</div>
	</section>
)

export default RelSkills
