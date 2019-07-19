// External Libraries
import React from 'react'
import { Container, Col } from 'reactstrap'

// Internal Imports
import DCSLink from '/imports/client/ui/components/DCSLink/index.js'
import i18n from '/imports/both/i18n/en/'

const Content = (props) => {
  return (
    <React.Fragment>
      <Container className="mt-5">
        <h1>The World Needs a Public Happiness Economy Because:</h1>
        <br/>
        <h3>Short</h3>
      </Container>
      {i18n.Whitepaper.Why.short.map((item, index) => {
        return (
          <Col key={index} className="pl-5 mt-5 wp-item" xs={11}>
            <h5>{item.heading} </h5>
            <li className="mb-3 text-left">{item.text}</li>
            <DCSLink
              badge="true"
              format="speech-bubble"
              title=" "
              subtitle="discuss"
              triggerId={`Short${index + 1}`}
              display="inline"
            />
          </Col>
        )
      })}
      <Container className="mt-5">
        <h3>Longer</h3>
      </Container>
      {i18n.Whitepaper.Why.longer.map((item, index) => {
        return (
          <Col key={index} className="pl-5 mt-5 wp-item" xs={11}>
            <h5>{item.heading} </h5>
            <li className="mb-3 text-left">{item.text}</li>
            <li className="mb-3 text-left">{item.answer}</li>
            <DCSLink
              badge="true"
              format="speech-bubble"
              title=" "
              subtitle="discuss"
              triggerId={`Longer${index + 1}`}
              display="inline"
            />
          </Col>
        )
      })}

    </React.Fragment>
  )
}

export default Content
