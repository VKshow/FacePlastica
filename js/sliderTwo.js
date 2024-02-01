(function() {
    const slidesTwo = document.querySelectorAll('.offer__slideTwo'),
    sliderTwo = document.querySelector('.offer__sliderTwo'),
    prevTwo = document.querySelector('.offer__slider-prevTwo'),
    nextTwo = document.querySelector('.offer__slider-nextTwo'),
    totalTwo = document.querySelector('#totalTwo'),
    currentTwo = document.querySelector('#currentTwo'),
    slidesWrapperTwo = document.querySelector('.offer__slider-wrapperTwo'),
    slidesFieldTwo = document.querySelector('.offer__slider-innerTwo'),
    widthTwo = window.getComputedStyle(slidesWrapperTwo).width;

    let slideIndexTwo = 1;
    let dotsTwo = [];
    let offsetTwo = 0;

    if (slidesTwo.length < 10) {
        totalTwo.textContent = `0${slidesTwo.length}`;
        currentTwo.textContent = `0${slideIndexTwo}`;
    } else {
        totalTwo.textContent = slidesTwo.length;
        currentTwo.textContent = slideIndexTwo;
    }

    slidesFieldTwo.style.width = 100 * slidesTwo.length + '%';
    slidesFieldTwo.style.display = 'flex';
    slidesFieldTwo.style.transition = '0.5s all';
    slidesWrapperTwo.style.overflow = 'hidden';
    slidesTwo.forEach(slide => {
        slide.style.width = widthTwo;
    });

    sliderTwo.style.position = 'relative';
    const indicators = document.createElement('ol');
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    sliderTwo.append(indicators);

    for (let i = 0; i < slidesTwo.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dotsTwo.push(dot);
    }

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    nextTwo.addEventListener('click', () => {
        if (offsetTwo === deleteNotDigits(widthTwo) * (slidesTwo.length - 1)) {
            offsetTwo = 0;
        } else {
            offsetTwo += deleteNotDigits(widthTwo);
        }

        slidesFieldTwo.style.transform = `translateX(-${offsetTwo}px)`;

        if (slideIndexTwo == slidesTwo.length) {
            slideIndexTwo = 1;
        } else {
            slideIndexTwo++;
        }

        if (slidesTwo.length < 10) {
            currentTwo.textContent = `0${slideIndexTwo}`;
        } else {
            currentTwo.textContent = slideIndexTwo;
        }

        dotsTwo.forEach(dot => dot.style.opacity = '.5');
        dotsTwo[slideIndexTwo - 1].style.opacity = 1;
    });

    prevTwo.addEventListener('click', () => {
        if (offsetTwo == 0) {
            offsetTwo = deleteNotDigits(widthTwo) * (slidesTwo.length - 1);
        } else {
            offsetTwo -= deleteNotDigits(widthTwo);
        }

        slidesFieldTwo.style.transform = `translateX(-${offsetTwo}px)`;

        if (slideIndexTwo == 1) {
            slideIndexTwo = slidesTwo.length;
        } else {
            slideIndexTwo--;
        }

        if (slidesTwo.length < 10) {
            currentTwo.textContent = `0${slideIndexTwo}`;
        } else {
            currentTwo.textContent = slideIndexTwo;
        }

        dotsTwo.forEach(dot => dot.style.opacity = '.5');
        dotsTwo[slideIndexTwo - 1].style.opacity = 1;
    });

    dotsTwo.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndexTwo = slideTo;
            offsetTwo = deleteNotDigits(widthTwo) * (slideTo - 1);

            slidesFieldTwo.style.transform = `translateX(-${offsetTwo}px)`;

            if (slidesTwo.length < 10) {
                currentTwo.textContent = `0${slideIndexTwo}`;
            } else {
                currentTwo.textContent = slideIndexTwo;
            }

            dotsTwo.forEach(dot => dot.style.opacity = '.5');
            dotsTwo[slideIndexTwo - 1].style.opacity = 1;
        });
    });

    // Auto slide functionality
    setInterval(() => {
        nextTwo.click(); // Simulate click on the next button
    }, 4000); // Change slide every 2.5 seconds

})();
