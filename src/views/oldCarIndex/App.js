import React, { Component } from 'react';
import './App.css';
import './App.scss'


//#region 优秀的折叠注释




//#endregion

import oldCarImg from './sample_bike@3x.png'

class OldCarIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftBtnStatus: false,
      rightBtnStatus: false,
    }

    this.handleLeftBtn = this.handleLeftBtn.bind(this)
  }
  style = {
    chooseColor: {
      borderColor: '#f00',
      borderWidth:'1',
      color:'#f00'
    },
    cancelChoose: {
      borderColor: '#000',
      borderWidth:'1',
      color:'#000'
    }
  }
  // handleLeftBtn = () =>{
  //   let status = this.state.leftBtnStatus
  //   this.setState({
  //     leftBtnStatus : !status
  //   },() => {
  //     console.log(this.state.leftBtnStatus)
  //   })
  // }
  handleLeftBtn(e,obj) {
    e.persist()
    if(obj !== 0 && !this.state.rightBtnStatus) {
      this.setState(state => ({
        leftBtnStatus: !state.leftBtnStatus,
      }))
    }
    if(obj !== 1 && !this.state.leftBtnStatus){
      this.setState(state => ({
        rightBtnStatus: !state.rightBtnStatus
      }))
    }
  }
  render() {
    return (
      <div className="oldCarIndex">
        <div className="img">
          <img src={oldCarImg} alt="" />
        </div>
        <div className="btn">
          <div className='item' style={this.state.leftBtnStatus? this.style.chooseColor :this.style.cancelChoose} onClick={e => this.handleLeftBtn(e,1)}>有</div>
          <div className='item' style={this.state.rightBtnStatus? this.style.chooseColor :this.style.cancelChoose} onClick={e => this.handleLeftBtn(e,0)}>无</div>
        </div>
        <div>
          <div className="next" >下一步</div>
        </div>
      </div>
    );
  }
}

export default OldCarIndex;