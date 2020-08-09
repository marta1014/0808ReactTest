import React from 'react';
import './App.css';

//电动车上牌首页index
console.log(window.location)

const newCarIndex = function() {
  const path = '/newCarIndex.html'
  window.location.href = window.location.origin + path
}

const oldCarIndex = function() {
  const path = '/oldCarIndex.html'
  window.location.href = window.location.origin + path
}

// const progressIndex = function() {
//   const path = ''
//   window.location.href = window.location.origin + path
// }

function App() {
  return (
    <div className="electrocarIndex">
      <div>
        <h3>请您选择业务类型</h3>
        <p>请选择对应的电动自行车业务类型、办理服务</p>
      </div>
      <div className="item" onClick={() => {newCarIndex()}}>
        <div>
          <img src="newCarIndexIcon" alt="" />
        </div>
        <div>新国标电动自行车</div>
      </div>
      <div className="item"  onClick={() => {oldCarIndex()}}>
        <div>
          <img src="oldCarIndexIcon" alt="" />
        </div>
        <div>旧国标电动自行车</div>
      </div>
      <div className="item">
        <div>
          <img src="searchIndexIcon" alt="" />
        </div>
        <div>业务办理进度查询</div>
      </div>
    </div>
  );
}

export default App;
