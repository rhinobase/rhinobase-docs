export function toggleColorMode() {
  if (localStorage.theme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

export function setDarkMode() {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
}

export function setLightMode() {
  document.documentElement.classList.remove("dark");
  localStorage.removeItem("theme");
}
