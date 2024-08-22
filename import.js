var cleandocs = {
  createBox: function(container,text) {
    var hidden = document.createElement("span")
    hidden.hidden = true
    hidden.innerHTML = `<style>
    @import url('https://fonts.googleapis.com/css2?family=Akaya+Telivigala&family=Josefin+Sans:wght@300&family=Nanum+Gothic:wght@700&family=Oswald:wght@300&family=Raleway:wght@200&family=Redressed&family=RocknRoll+One&family=Shippori+Mincho:wght@500&family=Stick&display=swap&family=DotGothic16&family=Open+Sans');

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

.CDflex {
  display: flex;
  gap: 5px;
  border: solid black 1px;
  background: white;
}

#doc {
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
}
</style>
      `
    container.appendChild(hidden)
    var controlsTop = document.createElement("div")
    controlsTop.id = "controlsTop"
    controlsTop.classList = "CDflex"
    controlsTop.innerHTML = `<div type="color" id="tcP" class="CDToggleBtn">Aa</div><input type="color" id="tc" onchange="this.parentElement.querySelector('#tcP').style.color = this.value;this.parentElement.parentElement.querySelector('#doc').style.color = this.value">
    <div id="bcP" type="color" class="CDToggleBtn">Aa</div><input type="color" id="bc" value="#ffffff" onchange="this.parentElement.parentElement.querySelector('#controlsTop').querySelector('#bcP').style.backgroundColor = this.value;this.parentElement.parentElement.querySelector('#doc').style.backgroundColor = this.value">
    <input id="size2" placeholder="15px" list="size-suggestions" onchange="this.parentElement.parentElement.querySelector('#doc').style.fontSize = this.value">
    <datalist id="size-suggestions">
		<option value="15px">Normal Text</option>
		<option value="20px"></option>
		<option value="30px">Heading 2</option>
		<option value="40px">Heading 1</option>
		<option value="50px">Title</option>
		<option value="60px"></option>
		<option value="70px">Big Title</option>
		<option value="80px"></option>
		<option value="90px"></option>
		<option value="100px"></option>
	</datalist>
  <select id="font2" onchange="this.parentElement.parentElement.querySelector('#doc').style.fontFamily = this.value">
    <option value="'Open Sans', sans-serif" style="font-family: 'Open Sans', sans-serif;">OpenSans</option>
    <option style="font-family: 'Times New Roman', Times, serif" value="'Times New Roman', Times, serif">Times New Roman</option>
    <option value="sans-serif" style="font-family: sans-serif;">Sans-Serif</option>
    <option value="cursive" style="font-family: cursive;">Comic Sans MS</option>
    <option value="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">Trebuchet MS</option>
    <option value="'DotGothic16', sans-serif" style="font-family: 'DotGothic16', sans-serif;">DotGothic16</option>
    <option value="'Josefin Sans', sans-serif" style="font-family: 'Josefin Sans', sans-serif;">Josefin Sans</option>
    <option value="'Nanum Gothic', sans-serif" style="font-family: 'Nanum Gothic', sans-serif;">Nanum Gothic</option>
    <option value="'Oswald', sans-serif" style="font-family: 'Oswald', sans-serif;">Oswald</option>
    <option value="'Raleway', sans-serif" style="font-family: 'Raleway', sans-serif;">Raleway</option>
    <option value="'RocknRoll One', sans-serif" style="font-family: 'RocknRoll One', sans-serif;">RocknRoll One</option>
    <option value="'Stick', sans-serif" style="font-family: 'Stick', cursive;">Stick</option>
    <option style="font-family: 'Akaya Telivigala', cursive;" value="'Akaya Telivigala', cursive">Akaya Telivigala</option>
    <option value="'Redressed', cursive" style="font-family: 'Redressed', cursive;">Redressed</option>
    <option value="'Shippori Mincho', serif" style="font-family: 'Shippori Mincho', serif;">Shippori Mincho</option>
  </select>`
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
