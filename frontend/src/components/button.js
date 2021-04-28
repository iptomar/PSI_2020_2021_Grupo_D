import React from 'react'
import { Button } from 'semantic-ui-react'
import './button.css'

const btnToggleForm = ({toggleForm}) => (
    <Button labelPosition='left' icon='left chevron' content='Adicione a sua experiência' onClick = {toggleForm} />
)

export default btnToggleForm
