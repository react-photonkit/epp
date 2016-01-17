import React from "react";
import ReactDom from "react-dom";
import { Window, Content, PaneGroup ,Pane } from "react-photonkit";

import Header from "./header.jsx"
import Footer from "./footer.jsx";
import Sidebar from "./sidebar.jsx"

require('../index.scss');

ReactDom.render(
  <Window>
    <Header />
    <Content>
      <PaneGroup>
        <Sidebar />
        <Pane className="padded-more">
          Hello, react-photonkit!!!
        </Pane>
      </PaneGroup>
    </Content>
    <Footer />
  </Window>
  , document.querySelector("#main"));
