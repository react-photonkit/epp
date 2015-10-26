React = require "react"
{ Pane, NavGroup, NavTitle, NavGroupItem } = require "react-photonkit"

module.exports = React.createClass
  onSelect: (index) ->
    console.log "sidebar clicked with #{index}"

  render: ->
    <Pane ptSize="sm" sidebar>
      <NavGroup activeKey={1} onSelect={@onSelect}>
        <NavTitle>nav group icon &amp; text</NavTitle>
        <NavGroupItem eventKey={1} glyph="home" text="home" />
        <NavGroupItem eventKey={2} glyph="download" text="download" />
      </NavGroup>
    </Pane>
