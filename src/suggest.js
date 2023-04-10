// class Suggest {
//     constructor(element, options) {
//         if (!(element instanceof HTMLElement)) {
//             throw new Error ('Передан не HTML элемент');
//         }

//         if (element.tagName !=='INPUT') {
//             throw new Error ('Поддерживается только input');
//         }

//         this.element = element;
//         this.suggestData = options.data;

//         this.onInput = this.onInput.bind(this);
//         this.onSuggestClick = this.onSuggestClick.bind(this);


//         this.renderSuggestPopup();

//         this.suggest.addEventListener('click', this.onSuggestClick);
//         this.element.addEventListener('input', this.onInput);
//     }

//     onInput() {
//         if (this.element.value === '') {
//             this.hideSuggest();

//             return;
//         }

//         const filteredData = this.suggestData.filter(
//             item => item.startsWith(this.element.value)
//         );

//         if(filteredData.length) {
//             this.renderSuggestItems(filteredData);
//         } else {
//             this.hideSuggest();
//         }
//     }

//     onSuggestClick(event) {
//         const target = event.target;
//         let city = target.textContent;
//         request({
//             url: `${API_BASE_URL}/weather`,
//             params: {
//                 q: `${city}`,
//                 appid: APP_ID,
//                 lang: 'ru',
//                 units: 'metric',
//             },
//             onSuccess: (data) => {
//                 weatherTemp.textContent = data.main.temp.toString().slice(0,2) + '°C';
//                 weatherType.textContent = data.weather[0].description;
//                 weatherIcon.setAttribute('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png');
//                 weatherCity.value = data.name;
        
//             }
//         })

//         if(!target.classList.contains('suggest__suggest-popup-item')) {
//             return;
//         }
//         this.element.value = target.dataset.suggest;
//         this.hideSuggest();
//     }

//     hideSuggest() {
//         this.suggest.classList.add('suggest__suggest-popup_hidden');
//     }

//     showSuggest() {
//         this.suggest.classList.remove('suggest__suggest-popup_hidden');
//     }

//     clearSuggest() {
//         this.suggest.innerHTML = "";
//     }

//     renderSuggestPopup () {
//         this.suggest = templateEngine(
//             Suggest.suggestPopupTemplate(true),
//         )
//         document.body.appendChild(this.suggest);
//     }

//     renderSuggestItems(data) {
//         this.clearSuggest();
//         const suggestItems = templateEngine(
//             Suggest.suggestItemsTemplate(data)
//         );

//         this.suggest.appendChild(suggestItems);

//         const coords = this.element.getBoundingClientRect();

//         const { bottom, left } = coords;

//         this.suggest.style.top = bottom + window.scrollY + 2 + 'px';
//         this.suggest.style.left = left + window.scrollX + 'px'

        
//         this.showSuggest();


//     }
// }

// Suggest.suggestPopupTemplate = (hidden) => ({
//     tag: 'div',
//     cls: ['suggest__suggest-popup', hidden ? 'suggest__suggest-popup_hidden' : undefined]

// })

// Suggest.suggestItemsTemplate = (suggests) => suggests.map(suggest => ({
//         tag: 'div',
//         cls: 'suggest__suggest-popup-item',
//         attrs: {
//             'data-suggest': suggest,
//         },
//         content: suggest,
//     }))






