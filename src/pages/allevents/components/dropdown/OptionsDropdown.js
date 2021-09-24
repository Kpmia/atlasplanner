import React from 'react'
import { Button, Dropdown, Icon } from 'semantic-ui-react'
import { DeleteEventModal } from '../modals/DeleteEventModal'
import { ViewKeyModal } from '../modals/ViewKeyModal'


export const OptionsDropdown = ({orgId, eventId, updateEvents, ...restProps}) => {
    return (
        <Dropdown style={{background: 'none', border: 'none'}} className="optionsIcon" trigger={<Icon  name="cog" />}>
            <Dropdown.Menu>
                <Dropdown.Item icon="delete"><DeleteEventModal updateEvents={updateEvents} orgId={orgId} eventId={eventId} />  </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

