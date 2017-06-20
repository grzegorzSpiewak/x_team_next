'use strict';
import React from 'react'
import SkillsBadgesData from '../data/SkillsBadgesData'
import SkillsBadges from './SkillsBadges'
import Button from './Common/Button'

const Skills = (props) => (
  <section className="skills">
		<div className="wrap">
			<h2 className="skills__title">
        { props.title }
      </h2>
			<p className="skills__subtitle" dangerouslySetInnerHTML={ {__html: props.subtitle} } />
			<SkillsBadges {...SkillsBadgesData} />
			{ Button(props.button) }
		</div>
	</section>
)

export default Skills
