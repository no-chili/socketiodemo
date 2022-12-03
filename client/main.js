import { io } from 'socket.io-client';
const join = document.getElementById('join')
const closeConnect = document.getElementById('close')
const message = document.getElementById('message')
const sent = document.getElementById('send')
const app = document.getElementById('app')
let socket
join?.addEventListener('click',()=>{
    if(socket){
      const content=document.createElement('div')
      const text=document.createTextNode('你已经在频道里了！')
      content.appendChild(text)
      app?.appendChild(content)
      return 
    }
    const content=document.createElement('div')
    const text=document.createTextNode('欢迎进入频道')
    content.appendChild(text)
    app?.appendChild(content)
    socket = io("ws://localhost:5000")
    socket.on('reply',(value)=>{
      const content=document.createElement('div')
      const text=document.createTextNode('SOMEONE:'+value)
      content.appendChild(text)
      app?.appendChild(content)
    })
})

closeConnect?.addEventListener('click',()=>{
  if(socket){
    socket.close()
    const content=document.createElement('div')
    const text=document.createTextNode('你退出了频道')
    content.appendChild(text)
    app?.appendChild(content)
    socket=null
  }else{
    const content=document.createElement('div')
    const text=document.createTextNode('请先进入频道')
    content.appendChild(text)
    app?.appendChild(content)
  }
})

sent?.addEventListener('click',()=>{
  if(socket){
    const value=message?.value
    const content=document.createElement('div')
    const text=document.createTextNode('ME:'+value)
    content.appendChild(text)
    app?.appendChild(content)
    console.log(socket.send(value));
  }else{
    const content=document.createElement('div')
    const text=document.createTextNode('请先进入频道')
    content.appendChild(text)
    app?.appendChild(content)
  }
})
