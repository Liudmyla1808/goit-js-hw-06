const decrementBtn = document.querySelector('[data-action="decrement"]');
console.log(decrementBtn);

const incrementBtn = document.querySelector('[data-action="increment"]');
console.log(incrementBtn);

const spanEl = document.getElementById("value");;
console.log(spanEl);

const counter= {
    value: 0,
    increment() {
        console.log('increment => this', this);
        this.value += 1;
    },
    decrement() {
        console.log('increment => this', this);
        this.value -= 1;
    },

};
 decrementBtn.addEventListener("click", function(){
    counter.decrement();
    console.log(counter);
    spanEl.textContent = counter.value;
});

 incrementBtn.addEventListener("click", function(){
    counter.increment();
    console.log(counter);
    spanEl.textContent = counter.value;
});