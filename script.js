document.addEventListener("DOMContentLoaded", () => {
    fetch("courses.json")
        .then(response => response.json())
        .then(data => {
            const subjectsContainer = document.querySelector(".subjects-container");

            const yearLevels = [
                { key: "firstYear", label: "First Year Courses" },
                { key: "secondYear", label: "Second Year Courses" },
                { key: "thirdYear", label: "Third Year Courses" }
            ];

            subjectsContainer.innerHTML = ""; 

            yearLevels.forEach(year => {
                let section = document.createElement("div");
                section.classList.add(year.key);
                section.innerHTML = `
                    <h3>${year.label}</h3>
                    <ul>
                        ${data[year.key].map(subject => `<li>${subject}</li>`).join("")}
                    </ul>
                `;
                subjectsContainer.appendChild(section);
            });
        })
        .catch(error => console.error("Error fetching courses:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});
