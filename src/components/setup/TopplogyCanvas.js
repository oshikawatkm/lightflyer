import React, { Component } from 'react'

const style = {
  backgroundColor: '#868e96',
};

class TopplogyCanvas extends Component {
  constructor() {
    super();
    this.state = { drawing: false };
  }

  getContext() {
    return this.refs.canvas.getContext('2d');
  }

  startDrawing(x, y) {
    this.setState({ drawing: true });
    const ctx = this.getContext();
    ctx.moveTo(x, y);

    // your node
    ctx.beginPath() ;
    ctx.arc( 400, 50, 30, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
    ctx.fillStyle = "#dc3545" ;
    ctx.fill() ;

    // alice
    ctx.beginPath() ;
    ctx.arc( 275, 75, 30, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
    ctx.fillStyle = "#17a2b8" ;
    ctx.fill() ;

    //bob
    ctx.beginPath() ;
    ctx.arc( 205, 150, 30, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
    ctx.fillStyle = "#17a2b8" ;
    ctx.fill() ;
    

    ctx.beginPath() ;
    ctx.arc( 515, 75, 30, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
    ctx.fillStyle = "#17a2b8" ;
    ctx.fill() ;


    ctx.beginPath() ;
    ctx.arc( 600, 150, 30, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
    ctx.fillStyle = "#17a2b8" ;
    ctx.fill() ;

    ctx.beginPath() ;
    ctx.arc( 205, 250, 30, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
    ctx.fillStyle = "#17a2b8" ;
    ctx.fill() ;

    ctx.beginPath() ;
    ctx.arc( 600, 250, 30, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
    ctx.fillStyle = "#17a2b8" ;
    ctx.fill() ;

    ctx.beginPath() ;
    ctx.arc( 275, 300, 30, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
    ctx.fillStyle = "#17a2b8" ;
    ctx.fill() ;

    ctx.beginPath() ;
    ctx.arc( 515, 300, 30, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
    ctx.fillStyle = "#17a2b8" ;
    ctx.fill() ;

    ctx.beginPath() ;
    ctx.arc( 400, 350, 30, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
    ctx.fillStyle = "#17a2b8" ;
    ctx.fill() ;

  }

  draw(x, y) {
    if (!this.state.drawing) {
      return;
    }
    const ctx = this.getContext();
    ctx.lineTo(x, y);
    ctx.stroke();
  }

  endDrawing() {
    this.setState({ drawing: false });
  }

  
  render() {
    return (
      <canvas 
        ref="canvas"
        width="830px"
        height="400px"
        onMouseDown={e => this.startDrawing(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
        onMouseUp={() => this.endDrawing()}
        onMouseLeave={() => this.endDrawing()}
        onMouseMove={e => this.draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
        style={style}
      />
    )
  }
}


export default TopplogyCanvas;