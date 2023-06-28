window.onload = () => {
    const _require = file => {
        try {
            const filepath = reqnode("path").join(global.dirname, file);
            reqnode(filepath);
        } catch (e) {
            console.log("require error:", e);
        }
    }

    _require('./plugin/search_multi.js');
    _require('./plugin/window_tab.js');
    _require('./plugin/resize_table.js');
    _require('./plugin/read_only.js');
    _require('./plugin/truncate_text.js');
}