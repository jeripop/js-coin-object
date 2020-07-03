let main = document.createElement('main')
let parentElement = document.querySelector('body')

parentElement.append(main)


let coin = {
    state: 0,
    flip: function() {
         this.state = Math.round(Math.random())
        
        /* 1. Randomly set your coin object's "state" property to be either 
        0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
        if (this.state === 1) {
            return 'Heads'
        }else{
            return 'Tails'
        }
        /* 2. Return the string "Heads" or "Tails", depending on whether
        "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let image = document.createElement('img');
       
       if (this.state === 1) {
        image.src ="images/coin_heads.jpg"
        }else{
            image.src = "images/coin_tails.jpg"  
        }
        return image
        /* 3. Set the properties of this image element to show either face-up
        or face-down, depending on whether this.state is 0 or 1.*/
        
        
    }
};
console.log(coin.state)

function display20Flips() {
    for (let index = 0; index < 20 ; index += 1) {
        let div = document.createElement('div')
        main.append(div)
        coin.flip()
        div.append(coin.toString());
    }

}

function display20Images() {
    for (let index = 0; index < 20; index += 1) {
        coin.flip()
        main.append(coin.toHTML());
    }
        }


// Note that you will need to download or create images to use to display face-up or face-down coins for the toHTML method. Create a folder directory named images in your repository to hold them.
// Test and demonstrate that your coin object is complete by doing the following:
// Write a function called display20Flips that uses a loop to flip the coin 20 times. Each time the coin flips, display the result of each flip as a string on the page (make use of your toString() method)
// Write a function called display20Images, again using a loop to flip the coin 20 times…but this time instead of displaying the result as a string, display the result of each flip as an HTML IMG element on the page (make use of your toHTML() method).
// Your HTML file should have nothing in the body except for your script tag. Instead of hard-coding HTML elements, create them dynamically with Javascript and append them to your HTML using document.createElement and ParentNode.append