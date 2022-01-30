const chart = document.querySelector("#chart").getContext("2d");

new Chart(chart, {
    type: "line",
    data: {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
        ],
        datasets: [
            {
                label: "BTC",
                data: [
                    49754, 65754, 46565, 57374, 65435, 45434, 46266, 33545,
                    45325, 73736, 36234,
                ],
                borderColor: "red",
                borderWidth: 2,
            },
            {
                label: "ETH",
                data: [
                    65756, 55643, 52264, 76573, 45243, 65732, 46545, 46265,
                    56737, 57235, 44325,
                ],
                borderColor: "blue",
                borderWidth: 2,
            },
        ],
    },
    options: {
        responsive: "true",
    },
});

// Show or Hide Sidebar

const menubtn = document.querySelector("#menu-btn");
const closebtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("aside");

menubtn.addEventListener("click", () => {
    sidebar.style.display = "block";
});

closebtn.addEventListener("click", () => {
    sidebar.style.display = "none";
});

// Dark theme button

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    themeBtn.querySelector("span:first-child").classList.toggle("active");
    themeBtn.querySelector("span:last-child").classList.toggle("active");
});
