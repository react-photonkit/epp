React = require "react"
{
  Toolbar, Actionbar
  Button, ButtonGroup
} = require "react-photonkit"

module.exports = React.createClass
  onClick: (event) ->
    alert "clicked 'close'"

  render: ->
    <Toolbar title="epp">
      <Actionbar>
        <ButtonGroup>
          <Button glyph="home" />
          <Button glyph="github" />
        </ButtonGroup>
      </Actionbar>
    </Toolbar>
