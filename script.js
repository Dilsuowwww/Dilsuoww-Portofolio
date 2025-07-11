function fadeText() {
    // Memulai efek fade-out
    textElement.classList.remove('visible'); 

    // Setelah fade-out selesai, ganti teks
    setTimeout(() => {
        textElement.textContent = texts[textIndex]; // Ganti teks
        textElement.classList.add('visible'); // Terapkan efek fade-in
        textIndex = (textIndex + 1) % texts.length; // Ganti ke teks berikutnya
    }, 1500); // Waktu untuk efek fade-out

    // Ulangi proses setelah teks selesai fade in
    setTimeout(fadeText, 1000); // Interval antara perubahan teks (3 detik)
}

// Mulai animasi setelah window dimuat
window.onload = fadeText;

const hamburger = document.querySelector('.hamburger-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu .links a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close menu when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});