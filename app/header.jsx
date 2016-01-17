import React from "react";
import { Toolbar, Actionbar, Button, ButtonGroup } from "react-photonkit";

class Header extends React.Component {
  render() {
    return (
      <Toolbar title="epp">
        <Actionbar>
          <ButtonGroup>
            <Button glyph="home" />
            <Button glyph="github" />
          </ButtonGroup>
        </Actionbar>
      </Toolbar>
    );
  }
}

export default Header;
