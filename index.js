let formIndex = 0;

const makeVisibleIndex = (index) => {
    let buttons = document.getElementsByClassName("custom-button");
    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList = ["custom-button"];
    }
    buttons[index].classList = ['custom-button custom-button-current'];
    for (let i = 0; i < 3; i++){
        let doc = document.getElementById("container-".concat(i.toString()));
        doc.style = "display: none;"
    }
    let doc = document.getElementById("container-".concat(index.toString()));
    doc.style = ""
}
const onNextClicked = () => {
    formIndex = (formIndex + 1) % 3;
    makeVisibleIndex(formIndex);
}

const onButtonSelected = (index) => {
    if (index == formIndex)
        return;
    formIndex = (index)
    console.log(index)
    makeVisibleIndex(formIndex);
}