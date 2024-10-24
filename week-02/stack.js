export default class Stack {
    /* 
       在 class 的 property 或 method 前加 # 符號，
       表示該 property 或 method 的存取權限為 private。
       只有在該 class 的內部能夠直接存取和呼叫，
       在該 class 以外以及繼承自此 class 的其他 class 中皆無法直接存取和呼叫。
    */
    #items;

    constructor() {
        this.#items = [];
    }

    // 在 stack 頂部加入元素i
    push(element) {
        this.#items.push(element);
    }

    // 移除並回傳 stack 頂部的元素
    pop() {
        if (!this.isEmpty()) return this.#items.pop();
        else return "(stack is empty)";
    }

    // 回傳 stack 頂部的元素，但不移除它
    peek() {
        if (!this.isEmpty()) return this.#items.at(-1);
        else return "(stack is empty)";
    }

    // 檢查 stack 是否為空
    isEmpty() {
        return this.#items.length == 0;
    }

    // 回傳 stack 中元素的個數
    size() {
        return this.#items.length;
    }

    // 清空 stack
    clear() {
        this.#items.length = 0;
    }

    // 印出 stack 內容（可選）
    print() {
        console.log(this.#items);
    }
}
