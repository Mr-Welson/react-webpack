import React from 'react';
import { Spin, Modal } from 'antd';
import cookie from 'js-cookie';


export default {
  withNull(Component) {
    return ({ isShow, ...rest }) => (
      isShow
        ? <Component {...rest} />
        : null
    )
  },
  withLoading(Component) { 
    return ({ loading, ...rest }) => (
      loading
        ? this.spin()
        : <Component {...rest} />
    )
  },
  /**
   * 请参考antd spin
   * @param { init } count 多少<br />
   */
  spin(count = 20) {
    var a = [];
    for (var i = 0; i < count; i++) {
      a.push(1);
    }
    return (
      <Spin size="large">
        {a.map((v, k) => {
          return <br key={k} />;
        })}
      </Spin>
    );
  },
  isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
  },
  /**
   * 交换数组指定的的两个键值位置,repalceIndex > index 下移，相反上移
   * @param {Array} arr 需要处理的数组
   * @param {index1} index 目标索引位置
   * @param {index2} repalceIndex 替换索引位置
   * @return {Array} 返回处理的数组
   */
  swapArrayItem(arr, index, repalceIndex) {
    arr[repalceIndex] = arr.splice(index, 1, arr[repalceIndex])[0];
    return arr;
  },
  /**
   * 获取随机的唯一key值
   *@param { int } number 随机范围
   *@function { string } 返回字符串随机key值，基本唯一
   */
  getUniqueKey(number = 100000000000) {
    var uniqueKey = Math.floor(Math.random(number) * number) + '';
    return uniqueKey;
  },
  /**
   * fullScreen 全屏
   * @param  {Objct} element 选择器
   */
  fullScreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  },
  /**
   * exitFullscreen 退出全屏
   * @param  {Objct} element 选择器
   */
  exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  },
  fullscreenEnabled:
    document.fullscreenEnabled ||
    document.mozFullScreenEnabled ||
    document.webkitFullscreenEnabled ||
    document.msFullscreenEnabled,
  /**
   * isFullscreen 判断是否全屏
   */
  isFullscreen() {
    return !!(
      document.fullscreenElement ||
      document.msFullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      false
    );
  },
  /* 
    监听全屏事件
  */
  // 添加 / 移除 全屏事件监听
  fullScreenListener(isAdd, fullscreenchange) {
    const funcName = isAdd ? 'addEventListener' : 'removeEventListener';
    const fullScreenEvents = [
      'fullscreenchange',
      'mozfullscreenchange',
      'webkitfullscreenchange',
      'msfullscreenchange'
    ]
    fullScreenEvents.map(v => document[funcName](v, fullscreenchange))
  },
  // 获取随机storeId方法
  getRandomStoreId(module, prefix) {
    const suffix = Math.random()
      .toString(14)
      .substr(2);
    const storeId = `${prefix}_${module}_${new Date() * 1}_${suffix}`;
    return storeId;
  },
  /**
   * 获取缓存数据
   * @param {string} key
   * @param {string} type: 缓存类型 'local'(默认) / cookie / session;
   */
  getCacheItem(key, type = 'local') {
    let data = null;
    switch (type) {
      case 'cookie':
        data = cookie.get(key);
        break;
      case 'session':
        data = sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key)) : null;
        break;
      default:
        data = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null
        break;
    }
    return data;
  },
  /**
   * 阻止冒泡的兼容
   * @param {*} e
   */
  stopPropagation(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      e.cancelBubble = true;
    }
  },
  // 严格的类型判断
  judgeType(data, type) {
    return Object.prototype.toString.apply(data) === `[object ${type}]`;
  },
  uuid() {
    let s = [];
    let hexDigits = '0123456789abcdef';
    for (let i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = '4'; 
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); 
    s[8] = s[13] = s[18] = s[23] = '-';

    let uuidStr = s.join('');
    return uuidStr;
  },
  /**
   * 飞入通行记录动画
   * @param {*} e 鼠标对象 
   * @param {*} url 图片src
   * @param {*} speed 动画速度
   */
  flyTo({start, url, speed = 1000}) {
    const body = document.querySelector('body');
    const oImg = document.createElement('img');
    oImg.src = url;
    oImg.style.position = 'fixed';
    oImg.style.transition = `all ${speed/1000}s ease`;
    oImg.style.zIndex = 999999;
    body.appendChild(oImg)
    // 滚动大小
    let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft || 0,
      scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
    const left = start.clientX + scrollLeft + 'px';
    const top = start.clientY + scrollTop + 'px';
    oImg.style.top = top;
    oImg.style.left = left;
    oImg.style.width = '160px';
    oImg.style.height = '90px';
    setTimeout(() => {
      oImg.style.top = '10px';
      oImg.style.left = document.body.clientWidth - 192 + 'px';
      oImg.style.opacity = 0.2;
      oImg.style.width = '16px';
      oImg.style.height = '16px';
    }, 100)
    setTimeout(() => {
      body.removeChild(oImg)
    }, speed+500)
  },
  /**
   * 下载本地图片
   *  @param domImg
   */
  downloadLocalImage(domImg, name){
    if (domImg) {
      let eleLink = document.createElement('a');
      let IM
      eleLink.download = name ? name : '';
      eleLink.style.display = 'none';
      // 图片转base64地址
      IM = document.createElement('img')
      IM.setAttribute('crossOrigin', 'anonymous')
      IM.src = domImg
      IM.onload = () => {
        let framecanvas = document.IM = document.createElement('canvas')
        framecanvas.width = IM.width;
        framecanvas.height = IM.height;
        let canvas1Fill = framecanvas.getContext('2d');
        canvas1Fill.drawImage(IM, 0, 0); 
        eleLink.href = framecanvas.toDataURL('image/jpeg', .8);
        document.body.appendChild(eleLink);
        eleLink.click();
        document.body.removeChild(eleLink);
      }
    }
  }
};
