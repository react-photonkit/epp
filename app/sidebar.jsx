import React from "react";
import { Pane, NavGroup, NavTitle, NavGroupItem } from "react-photonkit";

class Sidebar extends React.Component {
  onSelect(index) {
    console.log(`sidebar clicked with ${index}`)
  }

  render() {
    return (
      <Pane ptSize="sm" sidebar>
        <NavGroup activeKey={1} onSelect={this.onSelect}>
          <NavTitle>nav group icon &amp; text</NavTitle>
          <NavGroupItem eventKey={1} glyph="home" text="home" />
          <NavGroupItem eventKey={2} glyph="download" text="download" />
        </NavGroup>
      </Pane>
    );
  }
}

export default Sidebar;
