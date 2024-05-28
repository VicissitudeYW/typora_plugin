/**
 * 上传到各大平台的接口基类
 */
class BaseUploaderInterface {
    constructor(utils, config) {
        this.utils = utils;
        this.config = config;
    }

    getName() {
        throw new Error("应该被子类实现getName方法");
    }

    async upload(title, content, extraData, options) {
        throw new Error("应该被子类实现upload方法");
    }
}

module.exports = BaseUploaderInterface;
