
// form validatation........................................................................................

function validateForm()
			{
				
				var firstname = document.getElementById('fname').value;

				//alert(messageDetails)
				if (firstname.length<=5 ) 
				{
					alert("Empty fields are present!!! Please enter the values...");
				}

				else
				{
					alert("Thank you for your feedback!!!")
				}
			}

// image slider...............................................................


var images = ["C:\Users\devko\OneDrive\Pictures\OIP (2).jpg", "C:\Users\devko\OneDrive\Pictures\OIP (1).jpg", "C:\Users\devko\OneDrive\Pictures\Xiaomi-12X-Price-in-Nepal-1231.jpg","C:\Users\devko\OneDrive\Pictures\Best-Android-phones-In-2022-2.jpg"];

    var x = 0;
    var imgs = document.getElementById('img');
    setInterval(slider, 3000);

    function slider() {

      if (x < images.length) 
        {
        x = x + 1;
        } 

      else 
        {
        x = 1;
        }


      imgs.innerHTML = "<img src=" + images[x - 1] + ">";
    }