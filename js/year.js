// Gets current year and sets it in the footer
export function initDynamicYear() {
    const year = new Date().getFullYear();
    document.getElementById('currentYear').textContent = year;
}