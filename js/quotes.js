const quotes = [
    {
      quote: "삶이 공정하지 않고 두려움이 떠나지 않을 때, 우리가 할 수 있는 유일한 방법은 힘들어도 용기를 내보는 것이다."
    }
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  // Math.random -> 0 ~ 1 사이의 숫자 반환 (ex. 0.64543)
  // Math.floor -> 내림
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;