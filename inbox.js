const Inbox = function() {
  this.render = function() {
    const ul = document.createElement('ul');
    ul.className = 'messages';
    ul.innerHTML = 'a-baballoo theres a message for you';
    return ul;
  };
};

module.exports = Inbox;
