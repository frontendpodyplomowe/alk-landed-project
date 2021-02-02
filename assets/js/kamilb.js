

function randomValues() {
  anime({
    targets: '.Kamil li',
    translateY: -20,
    direction: 'alternate',
    loop: true,
    delay: function(el, i, l) {
      return i * 100;
    },
    endDelay: function(el, i, l) {
      return (l - i) * 100;
    }
  });
}

randomValues();