'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal");

const showModal = function () {
    console.log("Button Clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    // Thêm class 'no-scroll' vào body để ngăn chặn cuộn trang
    document.body.classList.add("no-scroll");
};

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    // Gỡ bỏ class 'no-scroll' từ body để cho phép cuộn trang trở lại
    document.body.classList.remove("no-scroll");
};

for (let i = 0; i < btnShowModal.length; i++) {
    btnShowModal[i].addEventListener("click", showModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
    console.log(e.key);
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});
