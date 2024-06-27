"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classes = void 0;
const glMatrixList = `
vec3
Vec3
mat4
Mat4
vec2
Vec2
`;
const oglClassLists = `



`;
// a list of class list that ignore
exports.classes = ["proxy", ...glMatrixList.split("\n")];
