// Maintains private reference
// Only want one user object to be created at a time

const Singleton = (function () {
    let instance;

    function createInstance() {
        const obj = new Object({name: 'Bharati'});
        return obj;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const insA = Singleton.getInstance();
console.log(insA);
const insB = Singleton.getInstance();

console.log(insA == insB); // Gives back same instance