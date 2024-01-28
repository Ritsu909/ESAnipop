webpackJsonp(
    [1],
    {
        355: function (e, s) {
            (s.typeSelector = function (e) {
                return {
                    mp3: "audio",
                    jpg: "image",
                    png: "image",
                    webp: "image",
                    json: "json",
                    fnt: "font",
                    strings: "text",
                    plist: "plist",
                    pack: "pack"
                }[e.substr(e.lastIndexOf(".") + 1)];
            }),
                (s.resourceRoot = "resource-publish"),
                (s.alias = {}),
                (s.groups = {}),
                (s.resources = {});
        }
    },
    [355]
);
