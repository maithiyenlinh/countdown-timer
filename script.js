const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const listId = ['#months', '#days', '#hours', '#mins', '#seconds'];
    const countDateValues = listId.map((id) => {
        return $(id);
    });

function countdown() {

    const coefTimes = [1000, 60, 60, 24, 30]; 

    const currDate = new Date();

    const newYears = new Date(currDate.getFullYear() + 1, 0, 1, 0, 0, 0);

    const dateDiff = newYears - currDate;

    countDateValues.reduce((prev, countDateValue) => {
        const coef = coefTimes.reduce((result, coefTime) => {
            return result*coefTime;
        }, 1);

        coefTimes.pop();

        const valueRender = Math.floor(prev / coef);

        valueRender < 10 ? countDateValue.innerText = `0${valueRender}` : countDateValue.innerText = valueRender;

        return prev - valueRender * coef;

    }, dateDiff);
};

countdown();

setInterval(countdown, 1000);
