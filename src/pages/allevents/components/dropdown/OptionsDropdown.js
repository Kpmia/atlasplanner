import React from 'react'
import { Button, Dropdown, Icon } from 'semantic-ui-react'
import { DeleteEventModal } from '../modals/DeleteEventModal'
import { ViewKeyModal } from '../modals/ViewKeyModal'


export const OptionsDropdown = ({orgId, eventId, updateEvents, ...restProps}) => {
    return (
        <Dropdown className="optionsIcon" trigger={<Icon  name="cog" />}>
            <Dropdown.Menu>
                <Dropdown.Item  onClick={() => window.location.href = '/event/' + orgId + '/' + eventId} description="Edit name, description, or instruction." icon="edit"> 
                <Icon name="edit" /> <span> Edit Event </span></Dropdown.Item>
                <Dropdown.Item icon="delete"><DeleteEventModal updateEvents={updateEvents} orgId={orgId} eventId={eventId} />  </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

