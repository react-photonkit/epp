React = require "react"
ReactDom = require "react-dom"
{
  Window, Content, PaneGroup ,Pane
} = require "react-photonkit"

Header = require "./header.cjsx"
Footer = require "./footer.cjsx"
Sidebar = require "./sidebar.cjsx"

require '../index.scss'

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
  , document.querySelector "#main")
