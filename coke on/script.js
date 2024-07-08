const products = document.querySelectorAll('.product');
const selectedProduct = document.getElementById('selected-product');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const modalImage = document.getElementById('modal-image');
const modalName = document.getElementById('modal-name');
const modalPrice = document.getElementById('modal-price');
const completeMessage = document.getElementById('complete-message');
const thankYouMessage = document.getElementById('thank-you-message');
const completeSound = document.getElementById('complete-sound');
const purchaseContainer = document.getElementById('purchase-container');
let startY;

products.forEach(product => {
    product.addEventListener('click', () => {
        const name = product.getAttribute('data-name');
        const price = product.getAttribute('data-price');
        const image = product.getAttribute('data-image');
        selectedProduct.textContent = `選択された製品: ${name}`;
        modalImage.src = image;
        modalName.textContent = name;
        modalPrice.textContent = `¥${price}`;
        modal.style.display = 'flex';
    });
});

modalContent.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
});

modalContent.addEventListener('touchmove', (e) => {
    const moveY = e.touches[0].clientY;
    if (moveY < startY - 50) {
        modalContent.style.transform = 'translateY(-100vh)';
        setTimeout(() => {
            modal.style.display = 'none';
            completeMessage.style.display = 'block';
            completeSound.play();
            setTimeout(() => {
                completeMessage.style.display = 'none';
                purchaseContainer.style.display = 'none';
                thankYouMessage.style.display = 'block';
            }, 1000);
        }, 300);
    }
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
