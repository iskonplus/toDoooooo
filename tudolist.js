// ---------------------Массивы----------------------------------------

let toDo = [];
let progress = [];
let done = [];



// ---------------------Добавляем в to do----------------

let textareAddCase = Array.from(document.getElementsByClassName("add case"));

let addData = Array.from(document.getElementsByClassName("add data"));

let buttonSave = Array.from(document.getElementsByClassName("add button_save"));

let divContent = Array.from(document.getElementsByClassName("div_content to-do"));

let divContentInProgress = Array.from(document.getElementsByClassName("div_content in-progress"));

let divContentDone = Array.from(document.getElementsByClassName("div_content done"));

buttonSave[0].onclick = addToDo;

function addToDo() {
  toDo.unshift({
    textare: textareAddCase[0].value,
    data: addData[0].value
  });

  let divInDivConte = document.createElement("div");
  divContent[0].prepend(divInDivConte);

  let divForP = document.createElement("div");
  divForP.className = "ToTextarea_and_data";

  divInDivConte.prepend(divForP);

  let pForTextarea = document.createElement("p");
  pForTextarea.className = "p_textarea";

  let pForData = document.createElement("p");
  pForData.className = "p_data";

  divForP.prepend(pForData);
  divForP.prepend(pForTextarea);

  pForData.prepend(`Make to: ${addData[0].value}`);
  pForTextarea.prepend(`- ${textareAddCase[0].value}`);

  let divForButton = document.createElement("div");
  divForButton.className = "litle_button";

  divInDivConte.append(divForButton);

  //------------------------------------------------------------

  let divButton1 = document.createElement("div");
  divButton1.className = "div_Button1";

  let divButton2 = document.createElement("div");
  divButton2.className = "div_Button2";

  divForButton.prepend(divButton2, divButton1);

  console.log(toDo);

  contToDo();
}


  
// ----------Удаление элементов в to-do и добовление в progress-------


function LitleButton() {

  let divButton1Html = document.querySelectorAll(".div_content.to-do>div>.litle_button>.div_Button1");
  let divButton2Html = document.querySelectorAll(".div_content.to-do>div>.litle_button>.div_Button2");

  for (let i = 0; i < divButton2Html.length; i++) {

    if (event.target === divButton2Html[i]) {

      // let obj = document.querySelectorAll(".div_content.to-do>div");      
      // document.body.removeChild(obj[i]);

      this.innerHTML = "";
      toDo.splice([i], 1);

    } else if (event.target === divButton1Html[i]) {
      
      if (progress.length <= 4) {
        progress.unshift(toDo[i]);
        divContentInProgress[0].prepend(this);
        toDo.splice([i], 1);
        
      }else{
        let ok = document.querySelector(".ok");
        modules.style.display = "flex";
        ok.style.display = "flex"; 

        let ButtunCancel = document.querySelector(".ok>.buttonCancel");
        ButtunCancel.addEventListener("click", cancel);
    
        function cancel() {
        
          modules.style.display = "none";
          ok.style.display = "none"; 
        }
      }
    }
  }
  
  contProgress();
}




// ----------------Удаление всего в to-do--- и done------------------

let deleteAllInToDo = document.querySelector(".box_delete_all.in_to_do > .delete_all");
deleteAllInToDo.addEventListener("click", function () { delitAll(divContent, toDo)});

let deleteAllInDone = document.querySelector(".box_delete_all.in_done > .delete_all");
deleteAllInDone.addEventListener("click", function () {delitAll(divContentDone, done)});

function delitAll(content, massive) {
  content[0].innerHTML = "";
  massive = [];
  console.log(massive);
  }
  
// ----------------------------удаляем элементы в progres-----------------

function LitleButton2() {

  let divButton1Html = document.querySelectorAll(".div_content.in-progress>div>.litle_button>.div_Button1");
  let divButton2Html = document.querySelectorAll(".div_content.in-progress>div>.litle_button>.div_Button2");

  for (let i = 0; i < divButton2Html.length; i++) {

    if (event.target === divButton2Html[i]) {
      // ------------------------
      modules.style.display = "flex";
      del.style.display = "flex";  

      let ButtunYes1 = document.querySelector(".buttonYes");
      let ButtunCancel2 = document.querySelector("div>.buttonCancel");
    
      ButtunYes1.addEventListener("click", yes2);
      ButtunCancel2.addEventListener("click", cancel2);

      let letThis = this;
      function yes2() {
      
        letThis.innerHTML = "";
        progress.splice([i], 1);

        modules.style.display = "none";
        del.style.display = "none"
      }
          
      function cancel2() {
        modules.style.display = "none";
        del.style.display = "none"
      }
      
    } else if (event.target === divButton1Html[i]) {
      
        done.unshift(progress[i]);
        divContentDone[0].prepend(this);
        progress.splice([i], 1);
  }
 }

 let contDone = document.querySelector(".div_content.done>div");
 contDone.addEventListener("click", LitleButton3);

}



// ----------------------------удаляем все в progres-----------------------

let deleteAllInProgress = document.querySelector(".box_delete_all.in_progress > .delete_all");
deleteAllInProgress.addEventListener("click", delitAll2);


let modules = document.querySelector(".modul_Block");
let del = document.querySelector(".del");

let ButtunYes = document.querySelector(".buttonYes");
let ButtunCancel = document.querySelector("div>.buttonCancel");

function delitAll2() {

  modules.style.display = "flex";
  del.style.display = "flex";  

  ButtunYes.addEventListener("click", yes);
  ButtunCancel.addEventListener("click", cancel);
    
  function yes() {
    divContentInProgress[0].innerHTML = "";
    progress = [];
    modules.style.display = "none";
    del.style.display = "none"
  }

  function cancel() {
    modules.style.display = "none";
    del.style.display = "none"
  }
} 

// --------Удаление элементов в in progress и добовление в done-------


function LitleButton3() {

  let divButton1Html = document.querySelectorAll(".div_content.done>div>.litle_button>.div_Button1");
  let divButton2Html = document.querySelectorAll(".div_content.done>div>.litle_button>.div_Button2");

  for (let i = 0; i < divButton2Html.length; i++) {

    if (event.target === divButton2Html[i]) {

      this.innerHTML = "";
      progress.splice([i], 1);

    } else if (event.target === divButton1Html[i]) {
           
        toDo.unshift(done[i]);
        divContent[0].prepend(this);
        progress.splice([i], 1);
        
      console.log(this);
    }
  }
  let divButton1 = document.createElement("div");
  divButton1.className = "div_Button1";

  let divButton2 = document.createElement("div");
  divButton2.className = "div_Button2";

  console.log(toDo);

  let contToDo = document.querySelector(".div_content.to-do>div");

  contToDo.addEventListener("click", LitleButton);

  // contProgress();
  
  contToDo();

}

//--------------html content-----------

function contProgress() {
  let contProgress = document.querySelector(".div_content.in-progress>div");
  contProgress.addEventListener("click", LitleButton2); // не найдено после первого круга!
}

function contToDo() {
    let contToDo = document.querySelector(".div_content.to-do>div");
  contToDo.addEventListener("click", LitleButton);
}
