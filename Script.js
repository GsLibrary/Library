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

// [Functions] - (X)Class
function AddClass(object, Class) {
    object.classList.add(Class);
}

function RemoveClass(object, Class) {
    object.classList.remove(Class);
}

function ChangeClass(object, RClass, AClass) {
    object.classList.remove(RClass);
    object.classList.add(AClass);
}

function ToggleClass(object, Class) {
    object.classList.toggle(Class);
}
