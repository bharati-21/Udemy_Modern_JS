const User = function (name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function (message, to) {
        this.chatroom.send(message, this, to);
    },
    receive: function (message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

const Chatroom = function () {
    let users = {}; // list of users

    return {
        register: function (user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function (message, from, to) {
            if (to) {
                // Single user message
                to.receive(message, from);
            } else {
                // Mass message
                for (let i in users) {
                    if (users[i] != from) {
                        users[i].receive(message, from);
                    }
                }
            }
        }
    }
}

const bharati = new User('Bharati');
const brad = new User('Brad');
const jeff = new User('Jeff');
const sara = new User('Sara');

const chatRoom = new Chatroom();

chatRoom.register(bharati);
chatRoom.register(brad);
chatRoom.register(sara);
chatRoom.register(jeff);

brad.send('Hello Jeff', jeff);
sara.send('Hello everybody');
sara.send('Hello Brad! You are the best Dev ever!!', brad);