### 适配方案
> 主要是通过viewport设置、根元素font-size和rem实现

> viewport使用的最常用的设置
```
<meta name="viewport" content="width=device-width,initial-scale=1.0">
```

>根元素的font-size根据屏幕宽度自适应设置，当设备宽度为375(iPhone6)时，根元素font-size=16px
```JavaScript
(function (doc, win) {
      var docEl = win.document.documentElement;
      var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
      /**
        * ================================================
        *   设置根元素font-size
        * 当设备宽度为375(iPhone6)时，根元素font-size=16px; 
        × ================================================
        */
      var refreshRem = function () {
        var clientWidth = win.innerWidth
                          || doc.documentElement.clientWidth
                          || doc.body.clientWidth;
      
        if (!clientWidth) return;
        var fz;
        var width = clientWidth;
        fz = 16 * width / 375;
        docEl.style.fontSize = fz + 'px';
      };
    
      if (!doc.addEventListener) return;
      win.addEventListener(resizeEvt, refreshRem, false);
      doc.addEventListener('DOMContentLoaded', refreshRem, false);
      refreshRem();
    
    })(document, window);
```