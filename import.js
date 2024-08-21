var cleandocs = {
  createBox: function(container,text) {
    var hidden = document.createElement("span")
    hidden.hidden = true
    hidden.innerHTML = `<input type="color" id="tc" onchange="this.parentElement.getElementById('controlsTop').getElementById(this.id).style.color = this.value;this.parentElement.getElementById('doc').style.color = this.value"><input type="color" id="bc" value="#ffffff" onchange="this.parentElement.getElementById('controlsTop').getElementById(this.id).style.backgroundColor = this.value;this.parentElement.getElementById('doc').style.backgroundColor = this.value"><style>
      .CDToggleBtn {
        font-size: 15px;
        padding: 3px;
        border-radius: 3px;
      }
      
      .CDToggleBtn:hover {
        background: rgba(0,0,0,0.5)
      }
      </style>
      `
    container.appendChild(hidden)
    var controlsTop = document.createElement("div")
    controlsTop.id = "controlsTop"
    controlsTop.innerHTML = `
      <div onclick="cleandocs.buttonClick(this)" type="color" id="tc" class="CDToggleBtn">Aa</div> <div onclick="cleandocs.buttonClick(this)" id="bc" type="color" class="CDToggleBtn">Aa</div>
    `
    var doc = document.createElement("div")
    doc.id = "doc"
    doc.contentEditable = true
    doc.spellcheck = true
    if (text) {doc.innerHTML = text}
    return container;
  },
  getText: function(container) {
    return container.getElementById("doc").innerText
  },
  getHTML: function(container) {
    return container.getElementById("doc").innerHTML
  },
  buttonClick: function(elem) {
    if (elem.type == "color") {
      
    }
  }
}
