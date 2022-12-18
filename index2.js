function handleSubmit() {
    var text = document.getElementById("text").value;

    var clues = [
        {
            "id": "96a3be3cf272e017046d1b2674a52bd3",
            "value": " the least favorite beverage of the world's best goal scorer"
        },
        {
            "id": "a2ef406e2c2351e0b9e80029c909242d",
            "value": "A passion for justice. The experience of winning"
        },
        {
            "id": "e45ee7ce7e88149af8dd32b27f9512ce",
            "value": " I thought I could play with girls around but found kids"
        },
        {
            "id": "7d0665438e81d8eceb98c1e31fca80c1",
            "value": "bad luck today's not a Thursday, or else we'd be starting our event here"
        },
        {
            "id": "751d31dd6b56b26b29dac2c0e1839e34",
            "value": "A location where people from all around the world congregate."
        },
        {
            "id": "faeac4e1eef307c2ab7b0a3821e6c667",
            "value": "Invest the extra money for the extra money"
        },
        {
            "id": "d72d187df41e10ea7d9fcdc7f5909205",
            "value": "Hindavi Swarajya. (Kannaaa Pani Thaa Kutama Varu Singo Singala Tha Varum)"            
        },
        {
            "id": "fad6f4e614a212e80c67249a666d2b09",
            "value": "Two minutes. Two times a day. Stick by these two simple rules for a healthier smile!"
        },
        {
            "id": "0a8005f5594bd67041f88c6196192646",
            "value": "I wish I were Brij Mohan Lall Munjal selling all that I can see right now."
        },
        {
            "id": "d3d9446802a44259755d38e6d163e820",
            "value": "the  place where all the woodpeckers gather around"
        },
        {
            "id": "6512bd43d9caa6e02c990b0a82652dca",
            "value": "treasure hunt is not a game that's only  meant to be played outside"
        },
        {
            "id": "c20ad4d76fe97759aa27a0c99bff6710",
            "value": "Acharya Deva,What are whatAre you not entitled to stand on the pretext of caste?"
        },
        {
            "id": "c51ce410c124a10e0db5e4b97fc2af39",
            "value": "came back home but couldnt find that old chole  bature place which id always miss."
        },
        {
            "id": "aab3238922bcc25a6f606eb525ffdc56",
            "value": "oh my favourite bunking spot! why you hidden in between that little green shades."
        },
        {
            "id": "9bf31c7ff062936a96d3c8bd1f8f2ff3",
            "value": "It was that day when I needed that munching and could only find you as my savior that night with all the canteens closed around."
        },
    ]
    var value;
    for(i = 0; i<clues.length; i++) {
        if (clues[i].id == text) {
            value = clues[i].value;
            
            break;
        } 
    }
    document.getElementById("value").innerText = value;
    document.getElementById("text").value = "";

} 