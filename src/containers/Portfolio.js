import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { Parallax } from 'react-parallax';

import Reveal from 'react-reveal'; // this package
import 'animate.css/animate.css'; // CSS animation effects library

import codeHeroImage from '../assets/images/code-bg.png';
import hdLogoImage from '../assets/images/portfolio/logos/hd-logo.png';
import cwtLogoImage from '../assets/images/portfolio/logos/cwt-logo.png';
import aaLogoImage from '../assets/images/portfolio/logos/aa-logo.png';
import motortrakLogoImage from '../assets/images/portfolio/logos/motortrak-logo.png';
import alphawaveLogoImage from '../assets/images/portfolio/logos/alphawave-logo.png';

import FeatureBar from '../components/FeatureBar';
import Labels from '../labels';

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </p>
            </Col>
          </Row>
          
          <Row className="margin-bottom-20">
            <Col xs={12}>
              <FeatureBar
                logo={alphawaveLogoImage}
                logoAlt={Labels.PORTFOLIO_ITEMS.ALPHAWAVE.title}
                title={Labels.PORTFOLIO_ITEMS.ALPHAWAVE.title}
                description={Labels.PORTFOLIO_ITEMS.ALPHAWAVE.description}
              />
            </Col>
          </Row>
          <Row className="margin-bottom-20">
            <Col xs={12}>
              <FeatureBar
                logo={motortrakLogoImage}
                logoAlt={Labels.PORTFOLIO_ITEMS.MOTORTRAK.title}
                title={Labels.PORTFOLIO_ITEMS.MOTORTRAK.title}
                description={Labels.PORTFOLIO_ITEMS.MOTORTRAK.description}
              />
            </Col>
          </Row>
          <Row className="margin-bottom-20">
            <Col xs={12}>
              <FeatureBar
                logo={aaLogoImage}
                logoAlt={Labels.PORTFOLIO_ITEMS.AA.title}
                title={Labels.PORTFOLIO_ITEMS.AA.title}
                description={Labels.PORTFOLIO_ITEMS.AA.description}
              />
            </Col>
          </Row>
          <Row className="margin-bottom-20">
            <Col xs={12}>
              <FeatureBar
                logo={cwtLogoImage}
                logoAlt={Labels.PORTFOLIO_ITEMS.CWT.title}
                title={Labels.PORTFOLIO_ITEMS.CWT.title}
                description={Labels.PORTFOLIO_ITEMS.CWT.description}
              />
            </Col>
          </Row>          
          <Row className="margin-bottom-20">
            <Col xs={12}>
              <FeatureBar
                logo={hdLogoImage}
                logoAlt={Labels.PORTFOLIO_ITEMS.HD.title}
                title={Labels.PORTFOLIO_ITEMS.HD.title}
                description={Labels.PORTFOLIO_ITEMS.HD.description}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Portfolio;