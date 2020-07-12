import * as React from "react";
import {render} from "react-dom";
import {
  StageComponent, BitmapComponent, ContainerComponent, ShapeComponent, TextComponent
} from "easeljs-react";
import {Rectangle, Shape, Stage} from "@createjs/easeljs";

class TopplogyCanvas extends React.Component {
  constructor(props) {
  super(props);
  let stage;
  let shape;
  let points = [];
  let state = {
    bitmapX: 0,
    bitmapY: 0,
    textColor: "white",
    image: null
};
}
  render() {
    const setStageRef = n => this.stage = n.stage;
    const setShapeRef = n => this.shape = n.getPublicInstance();

    const onContainerMounted = (stage) => {
        console.log("onContainerMounted: childCnt=", stage.children.length)
    };
  
    const onContainerUpdated = (stage) => {
        console.log("onContainerUpdated");
    };
  
    function update() {
        const bounds = this.shape.getBounds();
        this.shape.graphics
            .clear()
            .beginStroke("red")
            .drawRect(bounds.x, bounds.y, bounds.width, bounds.height)
            .endStroke();
        this.stage.update();
    }

    const onDown = (ev) => {
        console.log("onDown");
        this.points = [];
        this.points.push({
            x: ev.stageX, y: ev.stageY
        });
        this.setState({
            textColor: "red"
        })
    };
  
    const onPressMove = (ev) => {
        this.points.push({
            x: ev.stageX, y: ev.stageY
        });
        const len = this.points.length;
        let [prev, curr] = [this.points[len-2], this.points[len-1]];
        let [dx,dy] = [curr.x-prev.x,curr.y-prev.y];
        this.setState({
            bitmapX: this.state.bitmapX+dx,
            bitmapY: this.state.bitmapY+dy
        });
    };
  
    const onPressUp = (ev) => {
        this.points.push({
            x: ev.stageX, y: ev.stageY
        });
        console.log("onUp");
        this.setState({
            textColor: "white"
        });
    };

      return (
          <StageComponent
              autoClear={true}
              ref={this.setStageRef}
              width={1024} height={768}
              onContainerMounted={this.onContainerMounted}
              onContainerUpdated={this.onContainerUpdated}
          >
              <ShapeComponent ref={this.setShapeRef}
                              bounds={new Rectangle(0,0,100,100)}/>
              <ContainerComponent x={100} y={200}>
                  <TextComponent
                      font={"20pt Arial"}
                      color={this.state.textColor}
                      text={"hello world!"}/>
              </ContainerComponent>
          </StageComponent>
      )
  }
}

export default TopplogyCanvas;