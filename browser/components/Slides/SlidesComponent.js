import React from 'react';
import { Link, browserHistory } from 'react-router'
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

export default class SlidesComponent extends React.Component {

  /**
  * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
  * Avoid using long step names in horizontal steppers.
  *
  * Linear steppers require users to complete one step in order to move on to the next.
  */
  constructor () {
    super ();
    this.state = {
      finished: false,
      stepIndex: 0,
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.textOrImage = this.textOrImage.bind(this);
  }

  // NOTE: this is a helper function for the linear stepper.
  handleNext () {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= this.props.slides.length - 1,
    });
  };

  // NOTE: this is a helper function for the linear stepper.
  handlePrev () {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  // NOTE: this fuction return JSX for either lesson text or images.
  textOrImage (obj, index) {
    // NOTE: key of obj is either 'text' or 'img'
    if (obj.text) {
      return (
        <div>
          <p key={index}>{obj.text}</p>
        </div>
      );
    } else if (obj.img) {
      return (
        <div>
          <img key={index} src={obj.img} />
        </div>
      );
    }
  }

  render() {
    const { finished, stepIndex } = this.state;
    const { slides } = this.props;
    const contentStyle = { margin: '0 16px' };

    let linearStepper;

    // NOTE: set linearStepper to the JSX for each slide only when the props update.
    // NOTE: slides are deconstructed from this.props above.
    if (slides.length) {
      linearStepper = (
        <Stepper activeStep={stepIndex}>
          {
            slides.map((slide, index) => {
              return (
                <Step key={index}>
                  <StepLabel>{slide.title}</StepLabel>
                </Step>
              );
            })
          }
        </Stepper>
      );
    }

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>

        { linearStepper }

        <div style={contentStyle}>
          {finished ? (
            <p>
              <a href="#" onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}>
              Replay the slides
            </a>
          </p>
        ) : (
          <div>
            {
              slides.length && slides[stepIndex].slideContent.map((stuff, index) => {
                return this.textOrImage(stuff, index);
              })
            }
            <div style={{marginTop: 12}}>
              <FlatButton
                label="Back"
                disabled={stepIndex === 0}
                onClick={this.handlePrev}
                style={{marginRight: 12}}
              />
              <RaisedButton
                label={stepIndex === slides.length - 1 ? 'Finish' : 'Next'}
                primary={true}
                onClick={this.handleNext}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
}
