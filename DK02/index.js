var activeIndex = 0;
let activeIndexForSecondModal = 0;

var questionListForSecondModal = [
  {
    id: 1,
    englishQuestion: "What type of body turns you on?",
    question: "HVILKEN TYPE KROP TÆNDER DIG?",
    answerList: [
      { id: 1, name: "Skinny", LangName: "Mager" },
      { id: 2, name: "Curvy", LangName: "Kurvede" },
      { id: 3, name: "Regular", LangName: "Fast" },
      { id: 4, name: "Big Boobs", LangName: "Store bryster" },
      { id: 5, name: "Small boobs", LangName: "Små bryster" },
      { id: 6, name: "Milf", LangName: "MILF" },
      { id: 7, name: "Big Round Ass", LangName: "Stor rund røv" },
      { id: 8, name: "Tight Small Ass", LangName: "Stram lille røv" },
      { id: 9, name: "Other", LangName: "Andet" },
    ],
    checkedAnswer: [],
  },

  {
    id: 2,
    englishQuestion: "What age of women fits you best?",
    question: "HVILKEN ALDER AF KVINDER PASSER DIG BEDST?",
    answerList: [
      { id: 1, name: "18-25", LangName: "18-25" },
      { id: 2, name: "25-32", LangName: "25-32" },
      { id: 3, name: "32-37", LangName: "32-37" },
      { id: 4, name: "37-54", LangName: "37-54" },
      { id: 5, name: "55 and above", LangName: "55 og derover" },
    ],
    checkedAnswer: [],
  },
  {
    id: 3,
    englishQuestion: "What kind of relationship are you looking for?",
    question: "HVILKEN TYPE FORHOLD LEDER DU EFTER?",
    answerList: [
      { id: 1, name: "One Night Stand", LangName: "Engangsknald" },
      { id: 2, name: "Fuck Buddy", LangName: "Fuck Buddy" },
      { id: 3, name: "Discreet Affair", LangName: "Diskret affære" },
      { id: 4, name: "Dating", LangName: "Dating" },
      { id: 5, name: "Marriage", LangName: "Ægteskab" },
    ],
    checkedAnswer: [],
  },
  {
    id: 4,
    englishQuestion: "How far are you willing to travel for sex?",
    question: "HVOR LANGT ER DU VILLIG TIL AT REJSE FOR SEX?",
    answerList: [
      {
        id: 1,
        name: "Within Walking Distance",
        LangName: "Indenfor gåafstand",
      },

      {
        id: 2,
        name: "Within 10-50 Miles",
        LangName: "Inden for 10-50 km",
      },
      { id: 3, name: "Same State", LangName: "Samme stat" },
      { id: 4, name: "Doesn't Matter", LangName: "Betyder ikke noget" },
      {
        id: 5,
        name: "Within 2-10 Miles",
        LangName: "Inden for 2-10 km",
      },
    ],
    checkedAnswer: [],
  },
];

var image = document.getElementById("image");
document.getElementById("checkBoxList").style.display = "none";
var questionList = [
  {
    id: 1,

    title: "VIGTIG",
    englishQuestion:
      "Before we can show you a list and photos of local MILFS, who are  online and ready to have sex right now, we need to ask you a few quick questions.",
    question:
      "Før vi kan vise dig en liste og billeder af lokale MILFs, som er online og klar til at have sex lige nu, er vi nødt til at stille dig et par hurtige spørgsmål.",
    answer: "",
  },
  {
    id: 2,
    title: "SPØRGSMÅL 1/4",

    englishQuestion:
      "Many of these milfs are desperate single moms and cheating wives or girlfriends looking for some fun. They could be your neighbors or someone you know. Do you agree to keep the identity of these women a secret?",
    question:
      "Mange af disse MILFs er desperate enlige mødre og utro koner eller veninder på udkig efter noget sjov. De kan være dine naboer eller en du kender. Er du enig i at holde disse kvinders identitet hemmelig?",
    answer: "",
  },
  {
    id: 3,
    title: "SPØRGSMÅL 2/4",

    englishQuestion:
      'These women have asked us to not allow men that are seeking a "relationship". They only desire sex with no strings attached. Not dating. Do you agree to this request?',
    question:
      'Disse kvinder har bedt os om ikke at tillade mænd, der søger et "forhold". De ønsker kun sex uden bindinger. Ikke dating. Er du enig i denne anmodning?',
    answer: "",
  },

  {
    id: 4,
    title: "SPØRGSMÅL 3/4",
    englishQuestion:
      "Do you agree to use a condom when having sex with a partner you meet on our site if asked to do so?",
    question:
      "Accepterer du at bruge kondom, når du har sex med en partner, du møder på vores side, hvis du bliver bedt om det?",
    answer: "",
  },
  {
    id: 5,
    title: "SPØRGSMÅL 4/4",

    englishQuestion:
      "Each day that you check your account you will likely have multiple sex requests from MILFs on our site, will you be comfortable with this?",
    question:
      "Hver dag, du tjekker din konto, vil du sandsynligvis have flere sexanmodninger fra MILFs på vores side, vil du være fortrolig med dette?",
    answer: "",
  },
];

// function that handle the user response

function yesNoHandler(aggree) {
  var olderThanDescription = document.getElementById("olderThanDescription");

  var questionAndContent = document.getElementById("olderThanTitle");
  var actualQuestions = document.getElementById("actualQuestion");
  var rightButtonContainer = document.getElementById("noButton");
  var yesButton = document.getElementById("yesButton");

  yesButton.style.backgroundColor = "#F9AF42";
  yesButton.style.borderRadius = "80px";

  // Change the button text to "CONTINUE"
  yesButton.innerHTML = "BLIVE VED";

  if (activeIndex === 0) {
    rightButtonContainer.style.display = "none";
    yesButton.innerHTML = "BLIVE VED";
  } else if (activeIndex > 0) {
    yesButton.style.width = "7rem";

    if (window.innerWidth < 992) {
      yesButton.style.width = "7rem";
      yesButton.style.height = "6rem";
    }

    if (window.innerWidth < 475) {
      yesButton.style.width = "7rem";
      yesButton.style.height = "4.5rem";
    }

    document.getElementsByClassName(
      "landingPage-top-left-olderThan-buttons"
    )[0].style.gap = "2rem";

    rightButtonContainer.style.display = "flex";
    yesButton.innerHTML = "INGEN";
    yesButton.style.backgroundColor = "#000";
    yesButton.style.color = "white";
  }

  if (activeIndex == 1) {
    yesButton.style.padding = "0vw";
  }

  activeIndex = activeIndex + 1;

  if (activeIndex <= 6 && activeIndex >= 2) {
    questionAndContent.style.fontSize = "2rem";

    if (window.innerWidth < 321) {
      questionAndContent.style.fontSize = "2rem";
    }
    questionAndContent.style.textAlign = "center";
  }

  if (activeIndex <= 6 && activeIndex > 2) {
    if (aggree === 1) {
      questionList[activeIndex - 2].answer = "yes";
    } else if (aggree === -1) {
      questionList[activeIndex - 2].answer = "no";
    }
  }
  if (activeIndex >= 6) {
    olderThanDescription.style.display = "none";

    yesButton.style.backgroundColor = "black";

    yesButton.innerHTML = "SPRINGE";

    yesButton.style.padding = "7px";

    if (activeIndexForSecondModal < 4) {
      questionAndContent.style.fontSize = "2rem";

      if (window.innerWidth < 321) {
        questionAndContent.style.fontSize = "2rem";
      }
      actualQuestions.innerHTML =
        questionListForSecondModal[activeIndexForSecondModal].question;
      id = "checkBoxList";

      let activeRadioContent =
        questionListForSecondModal[activeIndexForSecondModal];

      var sampleDom = document.createElement("div");

      var datacollect = [];

      // collection of checkboxes selected value with their corresponding questions

      document.getElementById("landingPageContentChoose").style.display =
        "block";

      if (activeIndexForSecondModal <= 3) {
        for (i = 0; i < activeRadioContent.answerList.length; i++) {
          var checkBox = document.createElement("input");
          var label = document.createElement("label");

          var checkboxContainer = document.createElement("div");

          var customCheckbox = document.createElement("label");

          customCheckbox.htmlFor = activeRadioContent.answerList[i].name;
          customCheckbox.className = "customCheckboxQuestion";

          var tickArrow = document.createElement("img");

          tickArrow.src = "check.png";
          tickArrow.className = "icons";

          customCheckbox.appendChild(tickArrow);

          var label = document.createElement("label");
          checkBox.type = "checkbox";

          checkBox.name = activeRadioContent.answerList[i].name;
          checkBox.value = activeRadioContent.answerList[i].name;

          checkBox.id = activeRadioContent.answerList[i].name;
          checkBox.className = "customCheckboxQuestion_input";
          datacollect.push(checkBox);

          label.id = activeRadioContent.answerList[i].name;
          label.name = activeRadioContent.answerList[i].name;
          label.value = activeRadioContent.answerList[i].name;
          label.className = "customCheckbox";
          label.htmlFor = activeRadioContent.answerList[i].name;
          label.textContent = activeRadioContent.answerList[i].LangName;
          checkboxContainer.appendChild(checkBox);
          checkboxContainer.appendChild(customCheckbox);
          checkboxContainer.appendChild(label);

          checkboxContainer.className = "checkbox-container";
          sampleDom.appendChild(checkboxContainer);
          sampleDom.id = "checkBoxList";
          sampleDom.className = "landingPage-top-left-olderThan-checkBoxList";
        }
      }

      datacollect.forEach((item) => {
        item.addEventListener("change", (el) => {
          if (el.target.checked) {
            questionListForSecondModal[
              activeIndexForSecondModal - 1
            ].checkedAnswer.push(el.target.name);
          }
        });
      });

      if (activeIndexForSecondModal >= 0) {
        document.getElementById("checkBoxList").replaceWith(sampleDom);

        var checkboxes = document.getElementsByClassName("checkbox-container");

        if (activeIndexForSecondModal === 1) {
          for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].style.flexBasis = "28%";
          }
        }
      }

      // to change the question content
      questionAndContent.innerHTML =
        questionListForSecondModal[activeIndexForSecondModal].question;
      activeIndexForSecondModal = activeIndexForSecondModal + 1;
    } else if (activeIndexForSecondModal >= 4) {
      questionAndContent.innerHTML = "TAK SKAL DU HAVE";
      olderThanDescription.style.display = "flex";
      olderThanDescription.innerHTML = `<div class="landingPage-top-left-olderThan-descriptionFirst-thankYou">           
      <p>Du kan nu se vores liste og billeder af kvinder, der er online og klar til at chatte i dit område. Igen, hold venligst deres identitet hemmelig.</p>
                         
      <p>Klik på knappen "Blive Ved" nedenfor for at tilmelde dig vores side og begynde at chatte med MILFs, der bor i nærheden af ​​dig.</p>`;
      document.getElementById("landingPageContentChoose").style.display =
        "none";
      document.getElementById("checkBoxList").style.display = "none";
      document.getElementById("continueButtonContainer").style.display = "flex";
      rightButtonContainer.style.display = "none";

      var continues = document.getElementById("continueButton");

      var continuesContainer = document.getElementById(
        "continueButtonContainer"
      );

      continuesContainer.style.backgroundColor = "unset";

      continues.style.backgroundColor = "#F9AF42";

      continues.style.borderRadius = "80px";
      continues.style.padding = "7px";
      continues.style.paddingLeft = "18px";
      continues.style.paddingRight = "18px";

      continues.style.color = "black";
      continues.style.width = "unset";

      continues.style.lineHeight = 2.4;

      document.getElementsByClassName(
        "landingPage-top-left-olderThan-buttons"
      )[0].style.gap = "0rem";

      if (window.innerWidth < 500) {
        continues.style.fontSize = "1.5rem";
      }
      if (window.innerWidth <= 475) {
        continues.style.padding = "7px 12px";
        continues.style.fontSize = "1.3rem";
      }

      continues.innerHTML = "BLIVE VED";

      document.getElementById("yesButtonContainer").style.display = "none";
    }
  }

  if (activeIndex <= 5) {
    questionAndContent.innerHTML = questionList[activeIndex - 1].title;
    actualQuestions.innerHTML = questionList[activeIndex - 1].question;
  }
}
