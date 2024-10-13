export function scrollToElement(section: string) {
    const element = document.getElementById(section);
    if (element) {
        element.scrollIntoView()
    }
}