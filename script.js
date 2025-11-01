    const canvas = document.getElementById('swayingHouseCanvas');
    const ctx = canvas.getContext('2d');

    // Graident 1
    const grd = ctx.createLinearGradient(0, 0, 0, 300);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "orange");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 500, 250);

    let angle = 0; // Initial angle for swaying

    function drawHouse() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

      // Save the current state
      ctx.save();

      // Translate and rotate for swaying effect
      ctx.translate(250, 300); 
      ctx.rotate(Math.sin(angle) * 0.1); // Swaying effect

      // house body
      ctx.fillStyle = 'Yellow';
      ctx.fillRect(-100, -100, 200, 200);

      // the roof
      ctx.beginPath();
      ctx.moveTo(-60, -50);
      ctx.lineTo(0, -100);
      ctx.lineTo(60, -50);
      ctx.closePath();
      ctx.fillStyle = 'Blue';
      ctx.fill();

      // Restore the original state
      ctx.restore();
    }

    function animate() {
      angle += 0.05; 
      drawHouse();
      requestAnimationFrame(animate); // Loop the animation
    }

    animate(); 