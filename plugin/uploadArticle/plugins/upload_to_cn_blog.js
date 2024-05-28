const UploadUtil = require("../Plugin2UploadBridge");

class uploadToCNBlogPlugin extends BasePlugin {

    hotkey = () => [{hotkey: this.config.HOTKEY, callback: this.call}]


    call = () => {
        this.baseUploader = new UploadUtil(this);
        let filePath = this.utils.getFilePath();
        this.baseUploader.uploadProxy(filePath, "cnblog");
    }

}

module.exports = {
    plugin: uploadToCNBlogPlugin
};