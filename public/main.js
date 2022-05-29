const award= document.getElementsByClassName("fa-award");
const trash = document.getElementsByClassName("fa-trash");
const topPick = document.getElementsByClassName("fa-bomb");


Array.from(award).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        const time = this.parentNode.parentNode.childNodes[7].innerText

        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp,
            'time': time
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


Array.from(topPick).forEach(function(element) {
  // turn node list into array
      element.addEventListener('click', function(e){
        e.preventDefault()
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const time = this.parentNode.parentNode.childNodes[7].innerText
        const topPicks = e.target.classList.contains('blue') ? true : false
        fetch('topPicks', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'topPicks': topPicks,
            'time': time 
            // calling on the same property with a different value
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const time = this.parentNode.parentNode.childNodes[7].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'time': time
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
