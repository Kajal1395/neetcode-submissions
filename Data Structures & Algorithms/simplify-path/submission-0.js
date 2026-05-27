class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        let stack = [];
        const splitPath = path.split("/");
        console.log(splitPath, "splitPath");
        for (let i = 0; i < splitPath.length; i++) {
            if (splitPath[i] === "." || splitPath[i] === "") continue;
            if (splitPath[i] === "..") {
                if (stack.length > 0) {
                    stack.pop();
                }
                continue;
            }
            stack.push(splitPath[i]);
        }
        return "/" + stack.join("/");
    }
}
