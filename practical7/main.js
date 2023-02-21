import { validateinfo } from "./validateinfo.js"
import { rating } from "./rating.js"
import {review} from "./review.js"
function pari()
{
    let Name= prompt("Enter Username:");
    let pswd= prompt("Enter password:");
    let confirm=validateinfo(Name,pswd);
    {
        if(confirm==1)
        {
            alert("You Have Successfully Logged in \n Thank you!! \n You may proceed further");
            review();
            rating();
        }
        else
        {
            alert("Sorry Try Again \n Check your details properly");
        }
    }
    
}


window.pari=pari