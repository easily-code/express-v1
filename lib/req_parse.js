var urlencode=require('urlencode');

var urlParser=module.exports=function (req) {
  var url=req.url.toLowerCase();
      var url=urlencode.decode(url);
      var regexp=/^([^\?]+)(?:\?([^\?#]+))?(?:#[^\#].*)?$/g;
      var arr=regexp.exec(url);
      req.path=arr[1];
      req.params=[];
      req.query={};
      req.path=='/'||
      req.path.replace(/[^\/]+/g,function (a) {
          req.params.push(a);
      });
      if(arr[2]!==undefined){
        arr[2].replace(/([^\&]+)=([^\&]+)?/g,function (a,b,c) {
            req.query[b]=c;
        });
      }
      return req;
  };

// 测试一下：
// var url='/login/users?a=how+are+you&b=iam+fine+thankyou';
// var req={url};
// console.log(urlParser(req));
