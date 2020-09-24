"use strict";
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let Yosi = { name: 'Yoshi', age: 23 };
let docOne = addUID(Yosi);
console.log(docOne.uid);
//enum
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["VEGETABE"] = 0] = "VEGETABE";
    ResourceType[ResourceType["MILK"] = 1] = "MILK";
    ResourceType[ResourceType["MEET"] = 2] = "MEET";
})(ResourceType || (ResourceType = {}));
;
const ResOne = {
    uid: 34,
    resourceName: ResourceType.MILK,
    data: { name: "whit milk" }
};
const ResTwo = {
    uid: 45,
    resourceName: ResourceType.VEGETABE,
    data: ['tomato', 'onion']
};
console.log(ResOne, ResTwo);
