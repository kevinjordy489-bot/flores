    // Arrastrar flores (estilo Paint)
    const flowers = document.querySelectorAll('.flower');
    let isDragging = false;
    let currentFlower = null;
    let offsetX = 0;
    let offsetY = 0;

    flowers.forEach(flower => {
      flower.addEventListener('mousedown', (e) => {
        isDragging = true;
        currentFlower = flower;
        const rect = flower.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        flower.style.zIndex = 40;
        e.preventDefault();
      });
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging || !currentFlower) return;

      const garden = document.getElementById('garden');
      const gardenRect = garden.getBoundingClientRect();

      let x = e.clientX - gardenRect.left - offsetX;
      let y = e.clientY - gardenRect.top - offsetY;

      // Limitar dentro del jardín
      x = Math.max(0, Math.min(x, gardenRect.width - 90));
      y = Math.max(0, Math.min(y, gardenRect.height - 160));

      currentFlower.style.left = x + 'px';
      currentFlower.style.top = y + 'px';
      currentFlower.style.bottom = 'auto';
    });

    document.addEventListener('mouseup', () => {
      if (currentFlower) currentFlower.style.zIndex = 5;
      isDragging = false;
      currentFlower = null;
    });