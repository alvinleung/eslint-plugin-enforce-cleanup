const ignoreClassList = `
vec3
Vec3
mat4
Mat4
vec2
Vec2
ResizeObserver
`;

// a list of class list that ignore
export const classes = ["proxy", ...ignoreClassList.split("\n")];
