let travelSwiper = new Swiper('.travel .swiper', {
    slidesPerView: 4,
    spaceBetween: 12,
    navigation: {
        nextEl: '.travel .swiper_btn__next',
        prevEl: '.travel .swiper_btn__prev',
    }
})

let searchCountryInp = document.querySelector('.country__search_head input')
let searchCountryList = document.querySelector('.country__search_list');
let searchCountryListBtn = document.querySelectorAll('.country__search_list button');

if (searchCountryInp) {
    searchCountryInp.onfocus = () => {
        searchCountryList.classList.add('active');
    }

    searchCountryListBtn.forEach(btn => {
        btn.onclick = () => {
            searchCountryList.classList.remove('active');
            searchCountryInp.value = btn.querySelector('span').textContent;
            
            searchCountryListBtn.forEach(el => {
                if (btn == el) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            })
        }
    })
}

document.addEventListener('click', event => {
    if (searchCountryInp) {
        const isHeaderScrollNav = event.composedPath().includes(searchCountryInp)
        const isHeaderBar = event.composedPath().includes(searchCountryList)
    
        if (!isHeaderScrollNav && !isHeaderBar) {
            searchCountryList.classList.remove('active');
        }
    }
})