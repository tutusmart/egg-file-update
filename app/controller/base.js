const { Controller } = require('egg');
const fs = require('fs');
const path = require('path');
class BaseController extends Controller{

    success(data){
        let {ctx} = this;
        ctx.body = {
            code:1,
            data
        }
    }
    error(error){
        let {ctx} = this;
        ctx.body = {
            code:0,
            error
        }
    }
    mkdirsSync(dirname) {
        if (fs.existsSync(dirname)) { //判断路是否存在
            return true;
        } else {
            if (this.mkdirsSync(path.dirname(dirname))) {//创建文件夹
                console.log(1234);
                fs.mkdirSync(dirname);
                return true;
            }
        }
    }
}
module.exports = BaseController;