// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

window.onload = function () {
    if (document.querySelector(".body__content")) {
        const blogItem = [
            {
                link: "#1",
                title: "One of Saturn’s largest rings may be newer than anyone",
                category: "Tourism",
                date: "June 6, 2019",
                author: "Rickie Baroch",
                image: "img/content/01.jpg",
            },
            {
                link: "#2",
                title: "One of Saturn’s largest rings may be newer than anyone",
                category: "sport",
                date: "June 6, 2019",
                author: "Rickie Baroch",
                image: "img/content/02.jpg",
            },
            {
                link: "#3",
                title: "One of Saturn’s largest rings may be newer than anyone",
                category: "fashion",
                date: "June 6, 2019",
                author: "Rickie Baroch",
                image: "img/content/03.jpg",
            },
            {
                link: "#4",
                title: "One of Saturn’s largest rings may be newer than anyone",
                category: "clothes",
                date: "June 6, 2019",
                author: "Rickie Baroch",
                image: "img/content/04.jpg",
            },
            {
                link: "#5",
                title: "One of Saturn’s largest rings may be newer than anyone",
                category: "clothes",
                date: "June 6, 2019",
                author: "Rickie Baroch",
                image: "img/content/05.jpg",
            },
            {
                link: "#6",
                title: "One of Saturn’s largest rings may be newer than anyone",
                category: "fashion",
                date: "June 6, 2019",
                author: "Rickie Baroch",
                image: "img/content/06.jpg",
            },
            {
                link: "#7",
                title: "One of Saturn’s largest rings may be newer than anyone",
                category: "Summer",
                date: "June 6, 2019",
                author: "Rickie Baroch",
                image: "img/content/07.jpg",
            },
            {
                link: "#8",
                title: "One of Saturn’s largest rings may be newer than anyone",
                category: "Autumn",
                date: "June 6, 2019",
                author: "Rickie Baroch",
                image: "img/content/08.jpg",
            },
            {
                link: "#9",
                title: "One of Saturn’s largest rings may be newer than anyone",
                category: "clothes",
                date: "June 6, 2019",
                author: "Rickie Baroch",
                image: "img/content/09.jpg",
            },
            {
                link: "#10",
                title: "One of Saturn’s largest rings may be newer than anyone",
                category: "Summer",
                date: "June 6, 2019",
                author: "Rickie Baroch",
                image: "img/content/10.jpg",
            },
            {
                link: "#11",
                title: "One of Saturn’s largest rings may be newer than anyone",
                category: "Summer",
                date: "June 6, 2019",
                author: "Rickie Baroch",
                image: "img/content/11.jpg",
            },
        ];

        let body = document.querySelector(".body__content");
        blogItem.map((item, i) => {
            let article = document.createElement("article");
            article.className = `body__item blog-item ${i === 6 ? "_full" : ""}`;
            article.innerHTML = `
                <a href=${item?.link} class="blog-item__image-ibg">
                    <img src=${item?.image} alt=${item?.title} />
                </a>
                <div class="blog-item__body">
                    <a href=${item?.link} class="blog-item__category">${item?.category}</a>
                    <h3 class="blog-item__title">
                        <a href=${item?.link}>${item?.title}</a>
                    </h3>
                    <div class="blog-item__bottom">
                        <a href=${item?.link} class="blog-item__date">${item?.date}</a>
                        <a href=${item?.link} class="blog-item__name">
                            <span>By</span>
                            ${item?.author}
                        </a>
                    </div>
                </div>
            `;
            body.append(article);
        });
    }

    if (document.querySelector(".pagination-fill")) {
        // selecting required element
        const element = document.querySelector(".pagination-fill ul");
        let totalPages = 8;
        let page = 2;
        element.innerHTML = createPagination(totalPages, page);
        function createPagination(totalPages, page) {
            let liTag = "";
            let active;
            let beforePage = page - 1;
            let afterPage = page + 1;
            if (page > 1) {
                liTag += `<li class="pagination-fill__prev _icon-down"><span>OLDER POST</span></li>`;
            }

            if (page > 2) {
                liTag += `<li class="pagination-fill__number pagination-fill__number_first"><span>1</span></li>`;
                if (page > 3) {
                    liTag += `<li class="pagination-fill__dots"><span>...</span></li>`;
                }
            }

            // how many pages or li show before the current li

            for (var plength = beforePage; plength <= afterPage; plength++) {
                if (plength > totalPages) {
                    continue;
                }
                if (plength == 0) {
                    plength = plength + 1;
                }
                if (page == plength) {
                    active = "_active";
                } else {
                    active = "";
                }
                liTag += `<li class="pagination-fill__number ${active}"><span>${plength}</span></li>`;
            }

            if (page < totalPages - 1) {
                if (page < totalPages - 2) {
                    liTag += `<li class="pagination-fill__dots"><span>...</span></li>`;
                }
                liTag += `<li class="pagination-fill__number pagination-fill__number_last"><span>${totalPages}</span></li>`;
            }

            if (page < totalPages) {
                liTag += `<li class="pagination-fill__next _icon-down"><span>NEXT POST</span></li>`;
            }
            element.innerHTML = liTag;
            return liTag;
        }
    }
};
