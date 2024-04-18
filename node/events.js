const eventEmitter = require('events');

const bus = new eventEmitter();

const fn = (msg)=>{
	console.log("on msg",msg)
}

// 订阅一个事件 (默认只监听10个事件)
bus.on('some',fn);
bus.setMaxListeners(20);

// 订阅一个事件 仅一次
bus.once('some',(msg)=>{
	console.log("once msg",msg)
});

// 发布事件
bus.emit('some',['1','2']);
bus.emit('some',['1','2']);

// 取消订阅
bus.off('some',fn);

bus.emit('some',['1','2']);
