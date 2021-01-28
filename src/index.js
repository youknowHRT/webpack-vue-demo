import Vue from 'vue'
import App from './App'

if(module.hot){
  module.hot.accept(error=>{
    if(error)console.log('热替换出错');
  })
}

new Vue({
  el:"#root", //挂载的html节点
  render:h=>h(App) //渲染 相当于 render:function(createElement){return createElement(App)}
})