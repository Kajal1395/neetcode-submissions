class TrieNode {
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!current.children[word[i]]) {
                current.children[word[i]] = new TrieNode();
            }
            current = current.children[word[i]];
        }
        current.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        function dfs(currentB, charInd) {
            if (charInd === word.length) {
                console.log(currentB, "length", word.length);
                return currentB.endOfWord;
            }
            if (word[charInd] !== "." && !currentB.children[word[charInd]]) {
                return false;
            }
            if (word[charInd] === ".") {
                let childList = currentB.children;
                for (let child of Object.values(childList)) {
                    if (dfs(child, charInd + 1)) {
                        return true;
                    }
                }
                return false;
            }
            currentB = currentB.children[word[charInd]];

            return dfs(currentB, charInd + 1);
        }
        return dfs(this.root, 0);
    }
}
