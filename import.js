var cleandocs = {
  createBox: function(container,text) {
    var hidden = document.createElement("span")
    hidden.hidden = true
    hidden.innerHTML = `<style>
      .CDToggleBtn {
        font-size: 15px;
        padding: 3px;
      }
      
      input[type="color"] {
  height: 22px;
  background: none;
  border: none;
  padding: 0;
  width: 22px;
  border-radius: 0;
  cursor: pointer
}
      </style>
      `
    container.appendChild(hidden)
    var controlsTop = document.createElement("div")
    controlsTop.id = "controlsTop"
    controlsTop.innerHTML = `
      <div type="color" id="tcP" class="CDToggleBtn">Aa</div><input type="color" id="tc" onchange="this.parentElement.getElementById('tcP').style.color = this.value;this.parentElement.parentElement.getElementById('doc').style.color = this.value"> <div id="bc" type="color" class="CDToggleBtn">Aa</div><input type="color" id="bc" value="#ffffff" onchange="this.parentElement.parentElement.getElementById('controlsTop').getElementById(this.id).style.backgroundColor = this.value;this.parentElement.getElementById('doc').style.backgroundColor = this.value">
    `
    container.appendChild(controlsTop)
    var doc = document.createElement("div")
    doc.id = "doc"
    doc.contentEditable = true
    doc.spellcheck = true
    doc.style = "width:100%;height:100%;"
    if (text) {doc.innerHTML = text}
    container.appendChild(doc)
    return container;
  },
  getText: function(container) {
    return container.getElementById("doc").innerText
  },
  getHTML: function(container) {
    return container.getElementById("doc").innerHTML
  }
}
