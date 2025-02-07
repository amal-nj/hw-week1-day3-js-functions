//Exercise 1

function currencyConverter(currency, amount){
    let USDFactor=3.75;
    let GBPFactor=4.61;
    let EGPFactor=0.23;
    let BDFactor=9.95;
    let converted;
    if(currency=="USD"){
        return converted=amount*USDFactor;
    }
    else if (currency=="GBP"){
        return converted=amount*GBPFactor;
    }
    else if(currency=="EGP"){
        return converted=amount*EGPFactor;
    }
    else if(currency=="BD"){
        return converted=amount*BDFactor;
    }
    else{
        console.log("Please enter a valid currency");
    }
}

console.log(currencyConverter("USD", 10)+" SR");
console.log(currencyConverter("GBP", 10)+" SR");
console.log(currencyConverter("EGP", 10)+" SR");
console.log(currencyConverter("BD", 10)+" SR");

//Exercise 2

function isCharacterAVowel(character){
    character=character.toLowerCase();//in case user enters a capital letter
      if(character=="a"||character=="e"||character=="u"||character=="i"||character=="y"){
          return true;
      }
      else{
        return false;
      }
     
  }
  console.log(isCharacterAVowel("A"));
  console.log(isCharacterAVowel("f"));

  //Exercise 3

  function pow(base, exponent){
    return base**exponent;
}

console.log(pow(3,5));