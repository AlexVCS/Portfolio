const email = document.querySelector('.emailPhoto');
const linkedin = document.querySelector('.linkedinLogo');

const mouseHovAnimation = () => {
    anime({
        targets: email,
        width: '100%',
        scale: {
            delay: 800,
            value: 1.5
        },
        duration: 1500
    })
}

const mouseOutAnimation = () => {
    anime({
        targets: email,
        width: '100%',
        scale: {
            delay: 400,
            value: 1
        },
        duration: 1000
    })
}

email.addEventListener('mouseover', mouseHovAnimation)
email.addEventListener('mouseout', mouseOutAnimation)

const hoverAnimation = () => {
    anime({
        targets: linkedin,
        rotateZ: 360,
        duration: 1000
    });
}

linkedin.addEventListener('mouseover', hoverAnimation).onmouseover = animation.restart;
