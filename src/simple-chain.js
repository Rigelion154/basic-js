const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    currentChain: [],
    getLength() {
        return this.currentChain.length
    },
    addLink(value) {
        this.currentChain.push(`( ${value} )`)
        return this
    },
    removeLink(position) {
        if (position <= 0
            || position > this.currentChain.length
            || typeof position !== 'number') {
            this.currentChain.length = 0
            throw new Error(`You can't remove incorrect link!`)
        }
        this.currentChain.splice(position - 1, 1)
        return this
    },
    reverseChain() {
        this.currentChain.reverse()
        return this
    },
    finishChain() {
        const chain = this.currentChain.join('~~')
        this.currentChain.length = 0
        return chain
    }
};

// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4).finishChain())

module.exports = {
    chainMaker
};
