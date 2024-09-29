import checkNumImputs from "./checkNumImputs";

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll(".balcon_icons_img"),
    windowWidth = document.querySelectorAll("#width"),
    windowHeight = document.querySelectorAll("#height"),
    windowType = document.querySelectorAll("#view_type"),
    windowProfile = document.querySelectorAll(".checkbox");

  const nextCalcBtn = document.querySelector(".calc_next_btn"),
    nextNextB = document.querySelector(".popup_calc_profile_button");

  checkNumImputs("#width");
  checkNumImputs("#height");

  function bindActionToElems(event, elem, prop) {
    nextCalcBtn.disabled = true;
    nextProfileBtn.disabled = true;

    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case "SPAN":
            state[prop] = i;
            break;

          case "INPUT":
            if (item.getAttribute("type") === "checkbox") {
              if (item.checked) {
                i === 0 ? (state[prop] = "Холодное") : (state[prop] = "Теплое");
                nextProfileBtn.removeAttribute("disabled");
                elem.forEach((box, j) => {
                  box.checked = false;
                  if (i == j) {
                    box.checked = true;
                  }
                });
              }
            }

            if (item.getAttribute("type") === "text") {
              state[prop] = item.value;
              if (state.width && state.height) {
                nextCalcBtn.removeAttribute("disabled");
              }
            }
            break;

          case "SELECT":
            state[prop] = item.value;
            break;
        }

        console.log(state);
      });
    });
  }

  bindActionToElems("click", windowForm, "form");
  bindActionToElems("input", windowHeight, "height");
  bindActionToElems("input", windowWidth, "width");
  bindActionToElems("change", windowType, "type");
  bindActionToElems("change", windowProfile, "profile");
};

export default changeModalState;
