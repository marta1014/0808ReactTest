import React, { Component } from 'react';
import './App.css'

import exImg from './sample@3x.png'

class Happy extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="newCarIndex">
                <div className="example">
                    <img src={exImg} alt="" />
                </div>
                <div className="tip">
                    点击下方
                <span>“扫一扫”</span>，镜头对准电动车
                <span>“合格证”</span>上的二维码进行的扫描即可录入车辆信息。
                </div>
                <div className="btn" >扫一扫</div>
                <div className="find">
                    <span >找不到合格证？点这里~</span>
                </div>
            </div>
        );
    }
}

export default Happy;