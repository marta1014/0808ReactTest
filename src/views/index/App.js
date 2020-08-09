import React from 'react';
import './App.css';

//生活聚合页首页

import defaultAvatar from './通用头像@3x.png'

//  console.log(window.location)
 //window.location.href=window.location pathname
 function toSP() {
   const pathname = '/electrocar.html'
   window.location.href= window.location.origin + pathname
 }

function App() {
  return (
    <div className="lifeAggregation">
                    <div className="box">
                        <div className="home_top">
                            <div className="img">
                                <img src={defaultAvatar} alt="" />
                            </div>
                            <div className="statusLogin">
                                <h2>Hello , 欢迎回来</h2>
                                <span>立即登录</span>
                            </div>
                        </div>
                    </div>

                    <div className="serve">
                        <h2>特色服务</h2>
                        <div className="item">
                            <div className="top">
                                {/* <Link to="/home" > */}
                                <div className="imgItem red" onClick={() => {toSP()}}>
                                    <span>电动车上牌</span>
                                    {/* <img className="fir" src="" /> */}
                                </div>
                                {/* </Link> */}
                                <div className="imgItem ori">
                                    <span>电动车理赔</span>
                                    {/* <img src="" /> */}
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="imgItem gre">
                                    <span>买保险</span>
                                    {/* <img src="" /> */}
                                </div>
                                <div className="imgItem pin">
                                    <span>享服务</span>
                                    {/* <img src="" /> */}
                                </div>
                            </div>
                        </div>
                        <div className="banner">
                            {/* <img src="" /> */}
                            <div className="bnItem">
                                <div className="top">代步工具“行计划”</div>
                                <div className="bottom">
                                    <span>购买保险</span>
                                    <span>安全出行</span>
                                </div>
                            </div>
                            <div className="bnItem buy">
                                <span>立即购买</span>
                                <span className="icon"></span>
                            </div>
                        </div>
                        <div className="footer">
                            <div>
                                人民保险
                        <span>·</span>
                        服务人民
                </div>
                        </div>
                        <div className="hotline">
                            {/* <img src="" /> */}
                            <span>中国人民保险客服热线：</span>
                            <span className="phone">95518</span>(7*24小时)
                </div>
                    </div>
                </div>
  );
}

export default App;
