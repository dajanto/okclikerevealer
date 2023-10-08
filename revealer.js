let paywall = document.querySelector('.likes-you-paywall-explainer-cta');
paywall.remove();
let placeholderElements = document.querySelectorAll(".usercard-placeholder-thumb");
let likes = document.querySelector('.likes-you-paywall-with-likes');
likes.remove();
let cont = document.querySelector('.userrows-main');
placeholderElements.forEach(function (element) {
    let url = styleAttribute = element.getAttribute('style').match('https.*jpeg');
    let imgElement = document.createElement("img");
    imgElement.setAttribute("src", url);
    cont.appendChild(imgElement);
    element.remove();
});