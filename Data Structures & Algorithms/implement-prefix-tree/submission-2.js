class TrieNode {
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
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
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!current.children[word[i]]) {
                return false;
            }
            current = current.children[word[i]];
        }
        return current.endOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let current = this.root;
        for (let i = 0; i < prefix.length; i++) {
            if (!current.children[prefix[i]]) {
                return false;
            }
            current = current.children[prefix[i]];
        }
        return true;
    }
}
