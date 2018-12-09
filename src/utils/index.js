// 定义一个变量储存基地址
let baseUrl = "https://autumnfish.cn/wx/";

let hxios = {
  get(url) {
    return new Promise((resolve, reject) =>  {
      wx.request({
        // 加上基地址
        url: baseUrl + url, //开发者服务器接口地址",
        method: 'GET',
        dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
        success: res => {
          resolve(res);
        },
        fail: () => {
          reject();
        },
        complete: () => {}
      });
    })
  }
}


// 暴露出去
export default hxios;
