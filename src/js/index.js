function Data(){
    return {
        toggle: window.innerWidth > 768, // Inicializar toggle basado en el ancho de la ventana
  
        Start() {
            if (window.innerWidth <= 768) { // Si la pantalla es menor o igual a 768px
                toggle: window.innerWidth > 845; // Inicializar toggle basado en el ancho de la ventana
            }
          },
  
        Start() {
            if (window.innerWidth <= 845) { // Si la pantalla es menor o igual a 768px
                this.toggle = false; // Sobrescribir toggle a false
            }
        },
        SetToggle(){
            this.toggle =!this.toggle;
        },
        GetToggle(){
            return this.toggle;
        }
    }
  }
  
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 15,
      stretch: 10,
      depth: 300,
      modifier: 1,
      slideShadows: false
    },
    loop: true,
    });

    document.addEventListener('alpine:init', () => {
        Alpine.data('nav', () => ({
          toggle: false,
          SetToggle() {
            this.toggle = !this.toggle;
          },
          GetToggle() {
            return this.toggle;
          }
        }))
      });
    
      const navigationLinks = `
        <ul class="flex md:flex-row flex-col xl:space-x-10 lg:space-x-10 md:space-x-5 space-y-4 md:space-y-0">
          <li class="text-xl xl:text-2xl lg:text-xl md:text-sm">
            <a href="#artists" class="text-white hover:text-orange-400">Artistas</a>
          </li>
          <li class="text-xl xl:text-2xl  lg:text-xl md:text-sm">
            <a href="#books" class="text-white hover:text-orange-400">Libros</a>
          </li>
          <li class="text-xl xl:text-2xl  lg:text-xl md:text-sm">
            <a href="#collaborate" class="text-white hover:text-orange-400">Colabora</a>
          </li>
          <li class="text-xl xl:text-2xl  lg:text-xl md:text-sm">
            <a href="#" class="text-white hover:text-orange-400">Premium</a>
          </li>
        </ul>
      `;
    
      const buttonsAndSearch = `
        <div class="flex md:flex-row flex-col md:space-x-4 space-y-7 md:space-y-0 max-w-[200px] md:max-w-none mx-auto">
          <button class=" xl:text-lg md:text-sm whitespace-nowrap hover:cursor-pointer hover:text-orange-400 bg-transparent text-white border-slate-100 border-solid lg:px-6 md:px-1 border-2 px-4 py-2 rounded-md">
            Iniciar Sesión
          </button>
          <button class=" xl:text-lg md:text-sm hover:cursor-pointer hover:text-orange-400 bg-white border-2 text-black  lg:px-6 md:px-1 px-6 py-2 rounded-md">
            Registrarse
          </button>
        </div>
      `;
    
    
      document.getElementById('navigation-content').innerHTML = navigationLinks;
      document.getElementById('buttons-content').innerHTML = buttonsAndSearch;
    
      document.getElementById('mobile-navigation-content').innerHTML = navigationLinks;
      document.getElementById('mobile-buttons-content').innerHTML = buttonsAndSearch;