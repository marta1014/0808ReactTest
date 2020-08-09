const resolve = require("resolve")

//合并空运算符
const obj = {
    name:'zhangsan'
}

// console.log(obj.age ?? 20)//编辑器报错不支持，仅支持 || 操作符号



//不存在的一直点的话会报错，这样就不会报错

// console.log(obj?.age?.like ?? '默认值') //合并使用


//动态导入报错
// let handle = async () => {
//     const res = await import('./importLesson.js')
//     console.log(res)
// }

// handle()

//全局 =>window
// console.log(globalThis)

//promise.all

let pro = new Promise((resolve,reject) => {
    resolve("a")
})
let pro1 = new Promise((resolve,reject) => {
    resolve("b")
})
let pro2 = new Promise((resolve,reject) => {
    resolve("c")
})

let pro3 = new Promise((resolve,reject) => {
    reject("error")
})

// Promise.all([pro,pro1,pro2,pro3]).then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })
//Promise.all只有全部成功才能拿到结果，有一个失败，则进入catch

Promise.allSettled([pro,pro1,pro2,pro3]).then(data => {
    console.log(data)
})

//Promise.allSettled会把所有状态结果都返回