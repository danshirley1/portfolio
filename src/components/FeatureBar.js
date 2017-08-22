import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import Reveal from 'react-reveal'; // this package
import 'animate.css/animate.css'; // CSS animation effects library

import codeHeroImage from '../assets/images/code-bg-grayscale.png';

class FeatureBar extends Component {
  render() {
    return (
      <Parallax bgImage={codeHeroImage} strength={200} className="portfolio-item_feature-image">
        <Row>
          <Col xs={5}>
            <img src={this.props.logo} alt={this.props.logoAlt} className="portfolio-item_logo-image" />
          </Col>
          <Col xs={7} className="bg-color-dark-gray font-color-white">
            <Reveal effect="animated fadeIn">
              <h4>{this.props.title}</h4>
              <p>
                {this.props.description}
              </p>
            </Reveal>
          </Col>
        </Row>
      </Parallax>
    );
  }
}

export default FeatureBar;