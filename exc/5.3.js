function validator(string) {
  if (string.length > 7) {
    return "strong";
  } else {
    return "weak";
  }
}

function validator2(string) {
  return string.length ? "strong" : "weak";
}

function validator3(string) {
    if(string.length>7 && string[0] == string.toUpperCase())
    {
        return "Strong"
    }
    else
    {
        return "Weak"
    }
  }


  function validator3(string) {
    if(string.length>7)
    {
        while(string[i] != string[i].toUpperCase())
    {
        string[i] == string[i].toUpperCase()
    }

    }
    
    else
    {
        return "Weak"
    }
  }

  