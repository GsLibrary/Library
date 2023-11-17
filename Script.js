// Thanks For Using GsLibrary
// GsLibrary Script Is Currently On Version 1.0.1

// [Functions] - On(X)
function OnClick(object, callback) {
  object.addEventListener("click", callback);
}

function OnHover(object, callback) {
  object.addEventListener("mouseover", callback);
}

function OnLeave(object, callback) {
  object.addEventListener("mouseout", callback);
}

function OnDClick(object, callback) {
  object.addEventListener("dblclick", callback);
}

function OnRClick(object, callback) {
  object.addEventListener("contextmenu", callback);
}

function NoRMenu(object) {
  object.addEventListener("contextmenu", (event) => { event.preventDefault(); });
}
