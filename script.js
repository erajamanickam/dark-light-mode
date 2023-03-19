var body = document.querySelector('body');

document.getElementById('checkbox').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem("mode", "dark");

    if (!body.classList.contains("dark")) {
        return localStorage.setItem("mode", "light")
    }
})

if (localStorage.getItem("mode") === "dark") {
    body.classList.toggle('dark');
}