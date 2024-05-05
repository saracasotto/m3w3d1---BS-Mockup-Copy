let carousels = document.querySelectorAll('.carousel');

// Loop through each carousel
carousels.forEach(carousel => {
    let items = document.querySelectorAll('.carousel .carousel-item')

    // Loop through each element inside the carousel
    items.forEach((el) => {

        // Define the minimum number of items per slide
        const minPerSlide = 4
        let next = el.nextElementSibling
        for (var i = 1; i < minPerSlide; i++) {
            // If there is no next element, wrap the carousel by using the first child

            if (!next) {
                // wrap carousel by using first child
                next = items[0]
            }
            // Clone the next element
            let cloneChild = next.cloneNode(true)

            // Append the cloned child to the current element
            el.appendChild(cloneChild.children[0])

            // Move to the next sibling element

            next = next.nextElementSibling
        }
    })
})
