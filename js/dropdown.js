document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]')

    if (!isDropdownButton && e.target.closest('[data-dropdown') !== null) return

    let currentDefault
    if (isDropdownButton) {
        currentDefault = e.target.closest('[data-dropdown]')
        currentDefault.classList.toggle('active')
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDefault) return
        dropdown.classList.remove('active')
    })
})


document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches('[katalog-dropdown-button]')

    if (!isDropdownButton && e.target.closest('[katalog-dropdown') !== null) return

    let currentDefault
    if (isDropdownButton) {
        currentDefault = e.target.closest('[katalog-dropdown]')
        currentDefault.classList.toggle('active')
    }

    document.querySelectorAll('[katalog-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDefault) return
        dropdown.classList.remove('active')
    })
})
