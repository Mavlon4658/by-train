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

let parentTabHeadBtn = document.querySelectorAll('.parent_tab__btn button')
let parentTabItem = document.querySelectorAll('.parent_tab__item')

if (parentTabHeadBtn.length) {
    parentTabHeadBtn.forEach((btn, btnID) => {
        btn.onclick = () => {
            parentTabHeadBtn.forEach(el => {
                if (btn == el) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            })

            parentTabItem.forEach((el, idx) => {
                if (idx == btnID) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active')
                }
            })
        }
    })

    parentTabItem.forEach(el => {
        let childTabHeadBtn = el.querySelectorAll('.child_tab__head button')
        let childTabItem = el.querySelectorAll('.child_tab__item')
        
        childTabHeadBtn.forEach((btn, btnID) => {
            btn.onclick = () => {
                childTabHeadBtn.forEach(el => {
                    if (btn == el) {
                        el.classList.add('active');
                    } else {
                        el.classList.remove('active');
                    }
                })
        
                childTabItem.forEach((el, idx) => {
                    if (idx == btnID) {
                        el.classList.add('active');
                    } else {
                        el.classList.remove('active')
                    }
                })
            }
        })

        childTabItem.forEach(el2 => {
            let accordion = el2.querySelectorAll('.accordion');
            
            if (accordion.length) {
                accordion.forEach((item) => {
                    let header = item.querySelector('.accordion__head');
                    let content = item.querySelector('.accordion__body');
                
                    if (item.classList.contains('show')) {
                        content.style.maxHeight = 'none';
                    }
            
                    header.addEventListener('click', () => {
                        item.classList.toggle('show')
                        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
                    });
                });
            }
        })
    })
}


let menuModal = document.querySelector('.menu_modal');
let menuModalOpen = document.querySelector('.menu_modal__open');
let menuModalClose = document.querySelectorAll('.menu_modal__close, .menu_modal__bg')

menuModalOpen.onclick = e => {
    e.preventDefault();
    menuModal.classList.remove('end-active');
    menuModal.classList.add('active');
    document.querySelector('body').style.overflow = 'hidden'
}

menuModalClose.forEach(btn => {
    btn.onclick = () => {
        menuModal.classList.remove('active');
        menuModal.classList.add('end-active');
        document.querySelector('body').style.overflow = 'visible'
    }
})