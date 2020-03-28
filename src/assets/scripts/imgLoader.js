import list from './imgList'

let imgCount = list.length
let lists = [].concat(list)
let url = lists.map((item) => require(`../images/${item}`))
let loadCount = 0
let loadProcess = 0
let totalCount = list.length

function loadHandler (url) {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.onload = function () {
      loadCount++
      loadProcess = parseInt((loadCount / totalCount) * 100, 10)
      return resolve(url)
    }
    img.onerror = reject
    img.src = url
  })
}

function loadWarpHandler (url, handler) {
  let promise = handler(url).then(img => ({
    img,
    index: promise
  }))
  return promise
}

function imgLoaders (options) {
  let {
    limit,
    url,
    handler
  } = options
  let requestImgs = url.splice(0, limit).map(url => {
    return loadWarpHandler(url, handler)
  })
  if (imgCount < limit) {
    return Promise.all(requestImgs)
  }
  url.reduce((last, url) => {
    return last.then(() => {
      return Promise.race(requestImgs)
    }).then((res) => {
      var posIndex = requestImgs.findIndex((item) => {
        return item === res.index
      })
      requestImgs.splice(posIndex, 1)
      requestImgs.push(loadWarpHandler(url, handler))
    }).catch(error => {
      alert(error)
    })
  }, Promise.resolve())
    .then(() => {
      return Promise.all(requestImgs)
    })
}

function imgLoadersStart (options) {
  let process = 0
  var {
    limit = 5, Process
  } = options
  imgLoaders({
    limit,
    url,
    handler: loadHandler
  })
  // debug
  // 递归来加数字
  let numberGrow = () => {
    let accTimer = setTimeout(() => {
      if (process < loadProcess) {
        process++
      }
      Process(process)
      if (process < 100) {
        numberGrow()
      } else {
        clearTimeout(accTimer)
      }
    }, 20)
  }
  numberGrow()
}

// 开始执行
export default (imgLoadersStart)
