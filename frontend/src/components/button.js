import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const btnToggleForm = ({toggleForm}) => (
    <Button 
        primary 
        onClick = {toggleForm}
        icon = 'plus'
        labelPosition='right'
        content = 'Adicione a sua experiência'
    /> 

)

export default btnToggleForm;
