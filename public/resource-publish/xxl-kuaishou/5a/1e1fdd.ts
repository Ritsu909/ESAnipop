export const configPath = "config.res.js";

export const resourceRoot = () => "resource/";

function isUselessRes(path) {
    return /^(editor|720\.1280|debug|Default)\//.test(path);
}

function isBaseRes(path) {
    return path.startsWith("meta/") || path.startsWith("packed/meta/");
}

global.__is6xRes = function (path) {
    if (isUselessRes(path)) {
        return false;
    }
    if (/\.(jpg|jpeg|png|plist|json|fnt|pack)$/.test(path)) {
        if (path.includes("@6x.") || isBaseRes(path)) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
};

export const typeSelector = (path: string) => {
    // 暂时关闭 非6x

    // HACK: 输出时不会输出__is6xRes，故此处hack判断
    // if (global.__is6xRes && !global.__is6xRes(path)) {
    //     return null
    // }
    var ext = path.substr(path.lastIndexOf(".") + 1);
    var typeMap = {
        mp3: "audio",
        jpg: "image",
        png: "image",
        webp: "image",
        json: "json",
        fnt: "font",
        strings: "text",
        plist: "plist",
        pack: "pack"
    };
    var type = typeMap[ext];
    return type;
};
