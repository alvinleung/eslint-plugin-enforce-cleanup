"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classes = void 0;
const ignoreClassList = `
vec3
Vec3
mat4
Mat4
vec2
Vec2
ResizeObserver
Map
IntersectionObserver
`;
// a list of class list that ignore
exports.classes = ["proxy", ...ignoreClassList.split("\n")];
