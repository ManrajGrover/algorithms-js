class Node {
  constructor(data) {
    this._isLeaf = false;
    this._children = {};
    this._data = data;
  }

  get isLeaf() {
    return this._isLeaf;
  }

  set isLeaf(val) {
    this._isLeaf = val;
  }

  get children() {
    return this._children;
  }

  get data() {
    return this._data;
  }

  set data(val) {
    this._data = val;
  }
}

class Trie {
  constructor() {
    this._root = new Node();
    this._size = 0;
  }

  get size() {
    return this._size;
  }

  isEmpty() {
    return Object.keys(this._root.children).length === 0;
  }

  insert(data, val) {
    let crawler = this._root;

    for (let i = 0; i < data.length; i += 1) {
      let child = crawler.children[data[i]];

      if (child === undefined) {
        child = new Node();
        crawler.children[data[i]] = child;
      }

      crawler = child;
    }

    this._size += 1;
    crawler.isLeaf = true;
    crawler.data = val;

    return data;
  }

  search(data) {
    let crawler = this._root;

    for (let i = 0; i < data.length; i += 1) {
      const child = crawler.children[data[i]];

      if (child === undefined) {
        return false;
      }

      crawler = child;
    }

    return (crawler !== undefined && crawler.isLeaf);
  }
  }
}

module.exports = Trie;