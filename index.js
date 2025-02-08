const next = document.getElementById('tombol-tentang-saya');
const content = document.getElementById('tentang-saya');
const hobbiest = document.getElementById('hobi-hobi');
let count = 1;
next.addEventListener('click', () => {
    const page = count++;
    switch (page) {
        case 1:
            content.innerHTML = 'Saya memiliki banyak Hobi';
            break;
        case 2:
            content.innerHTML = 'Namun saya tidak ahli di satupun hobi saya';
            break;
        case 3: 
            content.innerHTML = 'Karena itu saya akan mendokumentasikan semua hobi saya di sini'
            break;
        case 4: 
            content.innerHTML = 'Yeay!';
            next.style.display = 'none';
            hobbiest.style.display = 'block';
        break;
        default:
            content.innerHTML = 'Yahhoo, Hikari desu...';
            break;
            
    }

 
})