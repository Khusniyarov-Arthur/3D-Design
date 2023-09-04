export const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);

  const statusBlock = document.createElement("div");
  const loaded = document.querySelector("section").cloneNode(true);
  loaded.style.display = "block";
  const loadText = "Загрузка";
  const errorText = "Ошибка";
  const successText = "Спасибо! Наш менеджер с вами свяжется";

  const validate = (list) => {
    let sum = 0;
    list.forEach((input) => {
      if (input.classList.contains("success")) {
        sum += 1;
      }
    });
    return sum == list.length ? true : false;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    let formData = new FormData(form);
    let formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);
    form.append(loaded);

    formData.forEach((item, index) => {
      formBody[index] = item;
    });
    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "value") {
        formBody[elem.id] = element.value;
      }
    });
    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          loaded.remove();
          statusBlock.textContent = successText;
          // formElements.forEach(item => {
          //   item.value = ''
          // })
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      alert("Данные не валидны");
    }
  };

  try {
    if (!form) {
      throw new Error("Верните форму на место, пожалуйста.");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};
