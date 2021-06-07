import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const btnToggleForm = ({toggleForm}) => (
    <Button primary onClick = {toggleForm}>
    <Icon name='plus' /> Adicione a sua experiência
    </Button>
)

export default btnToggleForm;
