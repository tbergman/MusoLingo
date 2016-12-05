import React, {Component} from 'react';
import Vex from 'vexflow';
import { separateMeasuresDuringGame, notePainter, musicRender } from '../../vexparser';

// var renderer, context;

export default class ChallengeStaff extends Component {
  constructor(props){
    super(props)
    this.state = {
      renderer: null,
      context: null
    }
  }

  componentDidMount(){
    const { staffId, measures, staves, beams} = this.props
    // console.log("COMPONENT DID MOUNT RUNNING")
    if (staves && measures && beams) {
      var VF = Vex.Flow;
      var div = document.getElementById(`${staffId}`)

      var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
      renderer.resize(1350, 150);

      this.setState({renderer: renderer})

      var context = renderer.getContext();
      context.setFont("Arial", 10, "");
      this.setState({context: context})

      musicRender(staves, measures, beams, context)

      // context.clearRect(0, 0, renderer.ctx.width, renderer.ctx.height)
    }
  }

  componentDidUpdate(){
    const { staffId, measures, staves, beams} = this.props
    if (staves && measures && beams) {
      // console.log("INSIDE DID UPDATE")

      var VF = Vex.Flow;
      var div = document.getElementById(`${staffId}`)

      // need to clear canvas;
      // div.innerHTML = ''
      // while (div.firstChild) {
      //   div.removeChild(div.firstChild);
      // }
      // $(`#${staffId}`).empty()


      // var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
      // renderer.resize(1350, 150);

      // var context = this.state.renderer.getContext();
      // context.setFont("Arial", 10, "");

      // context.clearRect(0, 0, this.state.renderer.ctx.width, this.state.renderer.ctx.height);

      this.state.context.clearRect(0, 0, this.state.renderer.ctx.width, this.state.renderer.ctx.height);

      notePainter(measures)

      musicRender(staves, measures, beams, this.state.context)
    }
  }

  render(){
    const { staffId, measures, staves, beams} = this.props
    // console.log("STAFF RENDERS", staffId, measures, staves, beams)
    return (
      <div>
        {/* <p>CHALLENGE STAFF</p> */}
        <div id={`${staffId}`}></div>
      </div>
    )
  }
}
