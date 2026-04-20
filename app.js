function openMenu() {
  const body = document.body;

  body.classList.add("open");
}

function closeMenu() {
  const body = document.body;

  body.classList.remove("open");
}

//template_4tbdtcx
//bruno.lorenzi.catunda
//gxSTh6nMhDLbpX4t8

async function sendEmail(event) {
  event.preventDefault();
  const body = document.body;
  const loading = document.querySelector(".contact__form__loading");
  const form = document.querySelector(".contact__form");

  try {
    loading.classList.remove("hidden");

    await emailjs.sendForm(
      "bruno.lorenzi.catunda",
      "template_4tbdtcx",
      event.target,
      "gxSTh6nMhDLbpX4t8",
    );

    form.reset();
    loading.classList.add("hidden");
    body.classList.add("success-open");
    setTimeout(() => {
      body.classList.remove("success-open");
    }, 5000);
  } catch {
    loading.classList.add("hidden")
    alert(
        "An error has occured. Please try again later or contact me at bruno.lorenzi.catunda@gmail.com"
    )
  }
}
