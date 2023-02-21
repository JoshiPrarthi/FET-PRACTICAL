export function validateinfo(Name,pswd)
 {
    let name = ["Heer", "Pari", "Dhruvi", "Yash", "Om", "Jeel", "Aakarsh"];
    let pass = ["h@123", "p@123", "d@123", "y@123", "o@123", "j@123", "a@123"];
    let matchFound = false;
    
    for (let i = 0; i < name.length; i++) 
    {
      if (Name === name[i] && pswd === pass[i]) 
      {
        matchFound = true;
        return 1;
      }
    }
    
    if (!matchFound) 
    {
      return 0;
    }
  }