function listener1() {
    setTimeout(() => console.log('#1 hello from timeout 1'), 1000)
    Promise.resolve().then(() => console.log('#1 hello from promise 1'))
    const promise = Promise.resolve()
    setTimeout(() => console.log('#1 hello from timeout 2'), 0)
    console.log('#1 Hello from main thread')
    setTimeout(() => promise.then(() => console.log('#1 hello from promise 2')), 0)
}

function listener2() {
    setTimeout(() => console.log('#2 hello from timeout 1'), 0)
    Promise.resolve().then(() => console.log('#2 hello from promise 1'))
    const promise = Promise.resolve()
    setTimeout(() => console.log('#2 hello from timeout 2'), 0)
    console.log('#2 Hello from main thread')
    setTimeout(() => promise.then(() => console.log('#2 hello from promise 2')), 0)
}

/**
 * callStack = []
 * taskQueue = []
 * microtask Queue = []
 */

/**
 * #1 Hello from main thread
 * #2 Hello from main thread
 * #1 hello from promise 1
 * #2 hello from promise 1
 * #1 hello from timeout 1
 * #1 hello from timeout 2
 * #1 hello from promise 2
 * #2 hello from timeout 1
 * #2 hello from timeout 2
 * #2 hello from promise 2
 */

listener1()
listener2()