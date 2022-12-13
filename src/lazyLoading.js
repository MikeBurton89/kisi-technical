

let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
}
export const lazyLoad = (image, src) => {
    const loaded = () => {
        image.classList.add('visible')

    }
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            console.log('an image has loaded')
            image.src = src
            if (image.complete) {
                loaded()
            } else {
                image.addEventListener('load', loaded)
            }
        }
    }, options)
    observer.observe(image)

    return {
        destroy() {
            image.removeEventListener('load', loaded)
        }
    }
}