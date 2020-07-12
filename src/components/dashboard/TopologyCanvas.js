import React, { Component } from 'react'


const style = {
  backgroundColor: '#868e96',
};

class TopologyCanvas extends Component {
  constructor() {
    super();
    this.state = { drawing: false };
  }

  getContext() {
    return this.refs.canvas.getContext('2d');
  }

  componentDidMount(){
    this.setState({ drawing: true });
    const ctx = this.getContext();

    // your node
    ctx.beginPath() ;
    ctx.arc( 200, 50, 20, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
    ctx.fillStyle = "#dc3545" ;
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.fillText("You", 190, 55);

    // alice
    ctx.beginPath() ;
    ctx.arc( 120, 100, 20, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
    ctx.fillStyle = "#17a2b8" ;
    ctx.fill() ;
    ctx.fillStyle = "#000000";
    ctx.fillText("alice", 110, 105);

    //bob
    ctx.beginPath() ;
    ctx.arc( 280, 100, 20, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
    ctx.fillStyle = "#17a2b8" ;
    ctx.fill() ;
    ctx.fillStyle = "#000000";
    ctx.fillText("bob", 270, 105);
    
    //carol
    ctx.beginPath() ;
    ctx.arc( 140, 170, 20, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
    ctx.fillStyle = "#17a2b8" ;
    ctx.fill();
    ctx.fillStyle = "#000000";
    ctx.fillText("carol", 130, 175);

    //dave
    ctx.beginPath() ;
    ctx.arc( 250, 170, 20, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
    ctx.fillStyle = "#17a2b8" ;
    ctx.fill() ;
    ctx.fillStyle = "#000000";
    ctx.fillText("dave", 240, 175);
  }

  startDrawing(x, y) {
   
  }

  endDrawing() {
    this.setState({ drawing: false });
  }

  
  render() {
    return (
      <canvas 
        ref="canvas"
        width="410px"
        height="230px"
        onMouseDown={e => this.startDrawing(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
        onMouseUp={() => this.endDrawing()}
        onMouseLeave={() => this.endDrawing()}
        onMouseMove={e => this.draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
        style={style}
      />
    )
  }
}


export default TopologyCanvas;