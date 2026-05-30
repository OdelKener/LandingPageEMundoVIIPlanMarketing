document.addEventListener('DOMContentLoaded', () => {

  /* ─── SPLASH SCREEN ─── */

  const splash       = document.getElementById('splash-screen');
  const progressBar  = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');
  const loadingText  = document.getElementById('loadingText');

  const loadingMessages = [
    'Preparando tu espacio de lectura...',
    'Cargando la Palabra...',
    'Inspirando nuevos comienzos...',
    'Conectando fe y conocimiento...',
    'Todo listo para ti...'
  ];

  let progress = 0;
  let msgIndex = 0;

  // bloquear scroll mientras carga
  document.body.style.overflow = 'hidden';

  const splashInterval = setInterval(() => {

    progress += Math.floor(Math.random() * 12) + 5;

    if (progress > 100) {
      progress = 100;
    }

    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${progress}%`;

    // cambiar texto
    if (
      progress > (msgIndex + 1) * 15 &&
      msgIndex < loadingMessages.length - 1
    ) {
      msgIndex++;
      loadingText.textContent = loadingMessages[msgIndex];
    }

    // finalizar
    if (progress >= 100) {

      clearInterval(splashInterval);

      setTimeout(() => {

        splash.classList.add('hide');

        document.body.style.overflow = '';

      }, 700);
    }

  }, 180);

});