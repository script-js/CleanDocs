var cleandocs = {
  createBox: function(container,expand,text) {
    container.style.border = "1px solid black"
    var hidden = document.createElement("span")
    hidden.hidden = true
    hidden.innerHTML = `<style>
    @import url('https://fonts.googleapis.com/css2?family=Akaya+Telivigala&family=Josefin+Sans:wght@300&family=Nanum+Gothic:wght@700&family=Oswald:wght@300&family=Raleway:wght@200&family=Redressed&family=RocknRoll+One&family=Shippori+Mincho:wght@500&family=Stick&display=swap&family=DotGothic16&family=Open+Sans');

      .CDPrev {
        font-size: 15px;
        padding: 3px;
      }

      .CDToggle {
        height: min-content;
        padding: 5px;
	border-radius: 3px;
        cursor: pointer;
	transition: ease 100ms;
      }
      .CDToggle:hover {
        background: #aeaeb0;
      }

       
      .CDToggle.active {
        background: #636363;
      }
      
#controlsTop input[type="color"] {
  height: 22px;
  background: none;
  border: none;
  padding: 0;
  width: 22px;
  border-radius: 0;
  cursor: pointer
}

#controlsTop input,select {
  transition: ease 100ms;
}

#controlsTop select {
  background: none;
  border: none;
  border-radius: 5px;
  cursor: pointer
}

#controlsTop select:hover {
  background: #e9e9ed;
}

.CDflex {
  display: flex;
  gap: 5px;
  border: solid black 1px;
  background: white;
  align-items: center;
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
    controlsTop.innerHTML = `<div type="color" id="tcP" class="CDPrev">Aa</div><input type="color" id="tc" onchange="this.parentElement.querySelector('#tcP').style.color = this.value;cleandocs.editSelection('color:' + this.value)"> |
    <div id="bcP" type="color" class="CDPrev">Aa</div><input type="color" id="bc" value="#ffffff" onchange="this.parentElement.parentElement.querySelector('#controlsTop').querySelector('#bcP').style.backgroundColor = this.value;cleandocs.editSelection('background-color:' + this.value)"> |
    <input id="size2" title="Font Size" min="10" value="15" max="100" type="range" onchange="this.parentElement.querySelector('#sizeP').innerHTML = this.value;cleandocs.editSelection('font-size:' + this.value + 'px')"> <span id="sizeP">15</span> |
  <select id="font2" onchange="cleandocs.editSelection('font-family:' + this.value);this.style.fontFamily = this.value">
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
  </select> |
  <div class="CDToggle" title="Bold" onclick="cleandocs.toggleBtn(this)"><b>B</b></div>
  <div class="CDToggle" title="Underline" onclick="cleandocs.toggleBtn(this)"><u>U</u></div>
  <div class="CDToggle" title="Italic" onclick="cleandocs.toggleBtn(this)"><var>I</var></div>&nbsp;|
  <div class="CDToggle active" title="Spellcheck" onclick="cleandocs.toggleBtn(this)"><svg style="width:13px" fill="#000000" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m 6.836416,8.898735 1.221032,0 -2.985394,-7.594938 -1.08666,0 L 1,8.898735 l 1.221032,0 0.654334,-1.752678 3.295034,0 0.666016,1.752678 z m -3.51704,-2.92113 1.209348,-3.224928 1.209348,3.224928 -2.418696,0 z m 8.856866,0.344694 -4.726388,4.726386 -2.14411,-2.14995 -0.823758,0.823758 2.97371,2.97371 L 13,7.146057 12.176242,6.322299 Z"></path></g></svg></div>
  <span style="color:red" id="CDError"></span>`
    container.appendChild(controlsTop)
    var doc = document.createElement("div")
    doc.id = "doc"
    doc.contentEditable = true
    doc.spellcheck = true
    doc.style = "width:100%;height:100%;"
    if (text) {doc.innerHTML = text}
    if (expand) {
      doc.style.height = "fit-content"
      container.style.height = "fit-content"
      if (!text) {doc.innerHTML = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n"}
    }
    container.appendChild(doc)
    return container;
  },
  getText: function(container) {
    return container.querySelector("#doc").innerText
  },
  getHTML: function(container) {
    return container.querySelector("#doc").innerHTML
  },
  toggleBtn: function(elem) {
    if (elem.classList == "CDToggle active") {
      elem.classList = "CDToggle"
      if (elem.parentElement.id == "controlsTop") {
	switch (elem.title) {
		case "Bold": cleandocs.editSelection('font-weight:normal')
			break;
		case "Underline": cleandocs.editSelection('text-decoration:none')
			break;
		case "Italic": cleandocs.editSelection('font-style:normal')
			break;
		case "Spellcheck": elem.parentElement.parentElement.querySelector('#doc').spellcheck = false
			break;
	}
      }
    } else {
      elem.classList = "CDToggle active"
      if (elem.parentElement.id == "controlsTop") {
	switch (elem.title) {
		case "Bold": cleandocs.editSelection('font-weight:bold')
			break;
		case "Underline": cleandocs.editSelection('text-decoration:underline')
			break;
		case "Italic": cleandocs.editSelection('font-style:italic')
			break;
		case "Spellcheck": elem.parentElement.parentElement.querySelector('#doc').spellcheck = true
			break;
	}
      }
    }
  },
  editSelection: function(attr) {
    var sel = window.getSelection();
    var selText = sel.toString()
    var err = document.getElementById("CDError")
    if (selText) {
      err.innerHTML = ""
      if (sel.rangeCount) {
        var e = document.createElement('span');
        e.style = attr;
	e.onmousedown = function() {
		tc.value = this.style.color
		tcP.style.color = this.style.color
		bc.value = this.style.backgroundColor
		bcP.style.backgroundColor = this.style.backgroundColor
		size2.value = this.style.fontSize
		font2.value = this.style.fontFamily
		var bElem = document.querySelector(".CDToggle[title='Bold']")
		var uElem = document.querySelector(".CDToggle[title='Underline']")
		var iElem = document.querySelector(".CDToggle[title='Bold']")
		if (this.style.fontWeight == "bold") {
		  bElem.classList = "CDToggle active"
		} else {
		  bElem.classList = "CDToggle"
		}
		if (this.style.fontStyle == "italic") {
		  iElem.classList = "CDToggle active"
		} else {
		  iElem.classList = "CDToggle"
		}
		if (this.style.textDecoration == "underline") {
		  uElem.classList = "CDToggle active"
		} else {
		  uElem.classList = "CDToggle"
		}
	}
        e.innerHTML = selText;
        var range = sel.getRangeAt(0);
        range.deleteContents();
        range.insertNode(e);
      } else {
	err.innerHTML = "Something Went Wrong"
      }
      sel.removeAllRanges()
	    return true;
    } else {
      err.innerHTML = "Please Select Text"
       setTimeout(function() {
	       err.innerHTML = ""
       },3000)
	    return false;
    }
  },
  insert: function(container,type,attr) {
    var elem = document.createElement(type)
    Object.keys(attr).forEach(function(k,index,array) {
      elem.setAttribute(k,attr[k])
      if (index == array.length - 1) {
        container.querySelector("#doc").appendChild(elem)
      }
    })
  }
}
