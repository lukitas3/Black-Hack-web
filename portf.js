const html = document.body;

document.addEventListener('DOMContentLoaded', () => {
	if(location.hash === ''){
		Loading()
		Svganime()
		Animacion()
	}
	if(location.hash === '#About'){
		About()
		BoxVis()
		Avatar()
	}
	if(location.hash === '#Contact'){
		Contact()
		Redes()
		Form()
	}
	if(location.hash === '#Proyectos'){
		Proyects()
		Cards()
	}
})

window.addEventListener('hashchange' , () => {
	if(location.hash === ''){
		Index()
	}
	if(location.hash === '#About'){
		About()
		BoxVis()
		Avatar()
	}
	if(location.hash === '#Contact'){
		Contact()
		Redes()
		Form()
	}
	if(location.hash === '#Proyectos'){
		Proyects()
		Cards()
	}
})

document.addEventListener('click' , e => {
    if(e.target.matches('.enviar')){
        FormValidation()
    }
	if (e.target.matches('.boton')) {
		Index()
		tipeo()
	}
})

let Index = () => {
	html.innerHTML = `
					<nav class="navegador">
        				<div class="logo">
            				<img class="img-logo" src="../DETODO DISEÑOS/WhatsApp Image 2022-03-03 at 00.06.35.jpeg" alt="">
        				</div>
        				<div class="cont-link">
            				<a class="links" href="#About"><b>Sobre Mi</b></a>
            				<a class="links" href="#Contact"><b>Contactame</b></a>
        				</div>
    				</nav>
    				<div class="hero-title">
        				<h1 id="typed2"></h1>
						<br>
						<a class="enlace" href="#Proyectos"><b>Ver Proyectos!</b></a>
    				</div>
    				<div class="portada"></div>`
}

let About = () => {
	html.innerHTML = `<nav class="navegador">
							<div class="logo">
								<img class="img-logo" src="../DETODO DISEÑOS/WhatsApp Image 2022-03-03 at 00.06.35.jpeg" alt="">
							</div>
							<div class="cont-link">
								<a class="links" href="#Proyectos"><b>Works</b></a>
								<a class="links" href="#Contact"><b>Contactame</b></a>
							</div>
						</nav>
						<a class="inicio" href=""><b>Volver al inicio</b></a>
						<div class="about">
							<div class="silueta">
								<img class="avatar" src="https://www.hoyfortnite.com/images/skins/SHADOW%20Enforcer_2.png">
							</div>
							<h2 class="hero-about">
								<b style="border-bottom:2px solid var(--rojo)">Sobre Mi:</b>
							</h2>
							<div class="sobremi">
								<div class="boxes">
									<h2><b class="subrayar">Descripcion:</b></h2>
									<div>
										<p><i>Soy un <b>Diseñador web</b> autodidacta
										<b>apasionado</b> por la programacion,
										que le gusta el realizar proyectos,
										Realizo webs SPA (<b>Single Page Aplications</b>) sin la necesidad de frameworks,
										si quieres que trabajemos juntos <a class="link-about" href="#Contact"><b>Contactame</b></a></i>
									</div>
								</div>
								<div class="boxes">
									<h2><b class="subrayar">Mis Herramientas:</b></h2>
									<div class="cont-herra">
										<img class="herramientas" src="https://static.wikia.nocookie.net/logopedia/images/2/2d/Visual_Studio_Code_1.18_icon.svg/revision/latest/scale-to-width-down/250?cb=20210722231931&path-prefix=es">
										<img class="herramientas" src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png">
									</div>
								</div>
								<div class="boxes">
									<h2><b class="subrayar">Mis conocimientos:</b></h2>
									<div class="cont-cono">
										<img class="cono" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png">
										<img class="cono" src="https://www.santiagobarrionuevo.com/wp-content/uploads/2014/04/CSS3-Logo.png">
										<img class="cono" src="https://jherax.files.wordpress.com/2018/08/javascript_logo.png?w=232">
									</div>
									</div>
								<div class="boxes">
									<h2><b class="subrayar">Mis pasatiempos:</b></h2>
									<div class="cont-hobby">
										<img class="hobby" src="https://a.espncdn.com/combiner/i?img=/redesign/assets/img/icons/ESPN-icon-soccer.png&w=288&h=288&transparent=true">
										<img class="hobby" src="https://static.platzi.com/media/achievements/badge-historia-lenguajes-paradigmas-50d82f29-78a3-400e-8e59-93620c91beb0.png">
										<img class="hobby" src="https://e6.pngbyte.com/pngpicture/138352/png-Jugar-En-La-Pc-Gamersnab-csgo-skins_thumbnail.png">
									</div>
								</div>
							</div>
						</div>`
}

let Contact = () => {
	html.innerHTML = `<nav class="navegador">
							<div class="logo">
								<img class="img-logo" src="../DETODO DISEÑOS/WhatsApp Image 2022-03-03 at 00.06.35.jpeg" alt="">
							</div>
							<div class="cont-link">
								<a class="links" href="#Proyectos"><b>Works</b></a>
								<a class="links" href="#About"><b>Sobre Mi</b></a>
							</div>
						</nav>
						<a class="inicio" href=""><b>Volver al inicio</b></a>
						<div class="main">
							<img class="correo" src="https://cdn.pixabay.com/photo/2017/03/17/06/47/email-2151046_960_720.png">
							<h2 class="title-contact">
								<b style="border-bottom:2px solid var(--rojo)">Contactame</b>
							</h2>
							<h4 class="subtitle">Mediante redes sociales:</h4>
							<div class="btn-redes">
								<a class="face redes" href="#"><img class="iconos" src="facebook.png">Facebook</a>
								<a class="insta redes" href="#"><img class="iconos" src="instagram.png">Instagram</a>
								<a class="linkedin redes" href="#"><img class="iconos" src="linkedin.png">Linkedin</a>
								<a class="whatsapp redes" href="#"><img class="iconos" src="whatsapp.png">Whatsapp</a>
							</div>
							<h4 class="subtitle">O enviame un mail:</h4>
							<div>
								<form id="seccion5" class="formulario sections" target="_blank" action="https://formsubmit.co/lucas.caceres.lc@hotmail.com" method="POST">
									<legend class="legend">Envia tu comentario</legend>
									<input class="inputs" type="text" name="name" placeholder="Ingresa tu nombre" title="El nombre solo acepta letras y espacios" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" required>
									<input class="inputs" type="email" name="email" placeholder="Ingresa tu email" title="Email incorrecto" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" required>
									<textarea class="inputs comentario" cols="30" rows="8" name="comentario" placeholder="Ingresa el comentario" title="No debes exceder los 250 caracteres" data-pattern="^.{1,255}$" required></textarea>
									<input class="enviar" type="submit" value="Enviar">
									<div class="loader none">
										<img src="tail-spin.svg" alt="">
									</div>
									<div class="enviado none">
										<p>Su mensaje ha sido enviado</p>
									</div>
								</form>
							</div>
						</div>
						`
}

let Proyects = () => {
	html.innerHTML = `<nav class="navegador">
							<div class="logo">
								<img class="img-logo" src="../DETODO DISEÑOS/WhatsApp Image 2022-03-03 at 00.06.35.jpeg" alt="">
							</div>
							<div class="cont-link">
								<a class="links" href="#About"><b>Sobre Mi</b></a>
								<a class="links" href="#Contact"><b>Contactame</b></a>
							</div>
						</nav>
						<a class="inicio" href=""><b>Volver al inicio</b></a>
						<div class="main">
							<h2 class="title-proyects">
								<b style="border-bottom:2px solid var(--rojo)">Proyectos webs</b>
							</h2>
							<div class="proyects">
								<div class="card-img">
									<img class="img-proyects" src="pagina1.jpeg">
									<div class="overlay">
    									<div class="text">
											<h4>Grafica FyC</h4>
											<a href="#" class="link-proyecto">Ver Pagina</a>
										</div>
  									</div>
								</div>
								<div class="card-img">
									<img class="img-proyects" src="pagina2.jpeg">
									<div class="overlay">
    									<div class="text">
											<h4>Varela 3D</h4>
											<a href="#" class="link-proyecto">Ver Pagina</a>
										</div>
  									</div>
								</div>
								<div class="card-img">
									<img class="img-proyects" src="pagina3.jpeg">
									<div class="overlay">
    									<div class="text">
											<h4>EyM Indumentaria</h4>
											<a href="#" class="link-proyecto">Ver Pagina</a>
										</div>
  									</div>
								</div>
							</div>
						</div>`
}

let Opacidad = () => {
	setTimeout(() => {
		html.style.opacity = '1'
		html.style.transition = 'all .5s'
	}, 10);
}

const tipeo = () => {
	setTimeout(() => {
		const typed2 = new Typed('#typed2', {
			strings: ['<b>Lucas Caceres</b>','<b>Web Developer!</b>','<b>Creador digital</b>'],
			typeSpeed: 50,
			backSpeed: 50,
			fadeOut: false,
			loop: true
		});
	}, 100);
}

const BoxVis = () => {
	const box = document.querySelectorAll('.boxes')
		setTimeout(() => {
			box.forEach(e => {
				e.style.opacity = '1'
				e.style.transform = 'none'	
				e.style.transition = '.5s'
			});
		}, 600);
}

const Avatar = () => {
	const avatar = document.querySelector('.avatar')
	setTimeout(() => {
		avatar.style.opacity = '1'
		avatar.style.transform = 'none'	
		avatar.style.transition = '.5s'
	}, 500);
}

const Cards = () => {
	const cards = document.querySelectorAll('.card-img')
		setTimeout(() => {
			cards.forEach(e => {
				e.style.opacity = '1'
				e.style.transform = 'none'	
				e.style.transition = '.5s'
			});
		}, 500);
}

const Redes = () => {
	const redes = document.querySelectorAll('.redes')
		setTimeout(() => {
			redes.forEach(e => {
				e.style.opacity = '1'
				e.style.transform = 'none'	
				e.style.transition = '.5s'
			});
		}, 500);
}

const Form = () => {
	const form = document.querySelector('.formulario')
	setTimeout(() => {
		form.style.opacity = '1'
		form.style.transform = 'none'	
		form.style.transition = '.5s'
	}, 500);
}

function FormValidation() {
    const form = document.querySelector('.formulario');
    inputs = document.querySelectorAll('.formulario [required]');
    
    inputs.forEach((input) => {
        const span = document.createElement('span');
        span.id = input.name;
        span.textContent = input.title;
        span.classList.add('contact-error')
        input.insertAdjacentElement('afterend' , span)
    });
    
    document.addEventListener('keyup' , e => {
        if(e.target.matches(".formulario [required]")){
            let	input = e.target
                pattern = input.pattern || input.dataset.pattern;
        if(pattern && input.value !== "") {
            let regexp = new RegExp(pattern);
            return !regexp.exec(input.value)
            ? document.getElementById(input.name).classList.add('span-active')
            : document.getElementById(input.name).classList.remove('span-active')
        }
        if(!pattern) {
            return input.value === ""
            ? document.getElementById(input.name).classList.add('span-active')
            : document.getElementById(input.name).classList.remove('span-active')
        }
        }
    })
    
    document.addEventListener('submit' , e => {
        e.preventDefault();
        const loader = document.querySelector('.loader')
            enviado = document.querySelector('.enviado')
    
            enviado.classList.add('none')
            loader.classList.remove('none')
            setTimeout(() => {
                loader.classList.add('none')
                enviado.classList.remove('none')
                form.reset();
                setTimeout(() => {
                    enviado.classList.add('none')
            }, 2000);
        }, 2000);
    })
}

const Loading = () => {
	html.style.opacity = '1'
	html.innerHTML = `<div class="svg"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	viewBox="0 0 600 300" style="enable-background:new 0 0 600 300;" xml:space="preserve">
<style type="text/css">
   .st0{fill:none;stroke:#BE4236;stroke-miterlimit:10;}
</style>
<path class="st0" d="M72.04,221.96h24.48c8.51,0,14.22-0.82,17.14-2.46c2.92-1.64,5.24-4.7,6.96-9.18
   c1.72-4.48,3.07-11.36,4.04-20.65l1.33-12.75c0.93-8.95,0.76-15.6-0.53-19.93c-1.29-4.34-4.28-7.44-8.98-9.31
   c4.57-1.7,7.76-4.13,9.58-7.3c1.82-3.17,3.15-8.77,3.99-16.81c1.24-11.89,1.08-20.5-0.47-25.85c-1.55-5.35-3.96-8.9-7.21-10.65
   c-3.25-1.75-8.21-2.63-14.88-2.63H86.39L72.04,221.96z M109.41,108.72c0.71,0.45,1.2,1.54,1.49,3.27c0.29,1.73,0.21,4.74-0.24,9.05
   c-0.85,8.16-1.65,13.1-2.4,14.82c-0.75,1.73-2.16,2.59-4.24,2.59c-0.5,0-1.21,0.03-2.12,0.08l3.19-30.58
   C107.26,108.01,108.7,108.27,109.41,108.72z M105.28,162.07c0.61,1.25,0.6,4.81-0.01,10.7l-1.34,12.83
   c-0.58,5.55-1.35,9.03-2.32,10.45c-0.97,1.42-2.95,2.21-5.95,2.38l4.01-38.48C102.8,160.12,104.67,160.83,105.28,162.07z"/>
<path class="st0" d="M140.05,84.43l-14.35,137.53h20.91l14.35-137.53H140.05z"/>
<path class="st0" d="M177.91,141.09c0.66-6.29,1.23-10.18,1.72-11.68c0.49-1.5,1.42-2.25,2.8-2.25c1.21,0,1.98,0.89,2.31,2.68
   c0.33,1.78,0.19,5.62-0.42,11.51c-0.49,4.7-1.05,7.82-1.68,9.34c-0.63,1.53-4.51,4.5-11.64,8.92c-6.66,4.08-10.93,7.65-12.83,10.7
   c-1.89,3.06-3.28,8.81-4.16,17.24l-0.97,9.26c-1.19,11.38-0.47,18.76,2.14,22.13c2.61,3.37,5.7,5.05,9.25,5.05
   c2.71,0,5.16-1.01,7.33-3.02c2.17-2.01,4.08-5.03,5.75-9.06l-1.05,10.05h19.75l5.9-56.58c1.94-18.63,2.87-30.94,2.79-36.91
   c-0.08-5.97-1.65-11.01-4.7-15.12c-3.06-4.11-8.02-6.16-14.89-6.16c-5.73,0-10.58,1.81-14.54,5.44c-3.96,3.63-6.79,7.8-8.47,12.53
   c-1.68,4.73-2.98,11.46-3.89,20.18l-0.79,7.56h19.05L177.91,141.09z M179.08,191.55c-0.59,5.66-1.15,9.16-1.67,10.49
   c-0.52,1.33-1.42,2-2.7,2c-1.34,0-2.15-0.85-2.42-2.55c-0.27-1.7-0.11-5.46,0.5-11.3c0.53-5.1,1.2-9,2-11.72
   c0.8-2.72,3.04-6.09,6.71-10.11L179.08,191.55z"/>
<path class="st0" d="M253.52,127.24c-0.64-5.78-2.63-10.56-5.99-14.36c-3.36-3.79-7.68-5.69-12.98-5.69
   c-5.33,0-10.05,1.91-14.17,5.73c-4.12,3.82-7,8.17-8.65,13.04c-1.65,4.87-2.97,12.09-3.97,21.66l-3.34,32.03
   c-1.15,10.99-1.34,19.47-0.57,25.44c0.77,5.98,2.65,10.62,5.66,13.93c3,3.31,7.37,4.97,13.1,4.97c4.49,0,8.38-1.2,11.68-3.61
   c3.3-2.41,6.14-5.97,8.53-10.7c2.39-4.73,3.99-9.34,4.81-13.85c0.82-4.5,1.72-11.26,2.69-20.26h-18.09l-1.4,13.42
   c-0.61,5.83-1.27,9.8-1.97,11.89c-0.7,2.1-1.74,3.14-3.12,3.14c-1.17,0-1.96-1-2.35-3.02c-0.39-2.01-0.38-5.03,0.04-9.05l5.55-53.18
   c0.51-4.93,1.05-8.1,1.6-9.51c0.55-1.42,1.41-2.12,2.58-2.12c1.17,0,1.89,0.81,2.16,2.42c0.27,1.61,0.16,4.69-0.31,9.22l-1.36,13
   h19.15C253.92,141.2,254.16,133.02,253.52,127.24z"/>
<path class="st0" d="M287.38,109.23l-9.77,32.93l6-57.74h-20.3l-14.35,137.53h20.3l5.15-49.13l1.21,49.13h19.52l-3.63-67.83
   l12.93-44.9H287.38z"/>
<path class="st0" d="M300.89,153.75l-2.47,23.7h26.69l2.47-23.7H300.89z"/>
<path class="st0" d="M365.76,84.43l-5.13,49.19h-6.33l5.13-49.19h-21.16l-14.35,137.53h21.16l6.03-57.77h6.33l-6.03,57.77h21.16
   l14.35-137.53H365.76z"/>
<path class="st0" d="M404.47,141.09c0.66-6.29,1.23-10.18,1.72-11.68c0.49-1.5,1.42-2.25,2.8-2.25c1.21,0,1.98,0.89,2.31,2.68
   c0.33,1.78,0.19,5.62-0.42,11.51c-0.49,4.7-1.05,7.82-1.68,9.34c-0.63,1.53-4.51,4.5-11.64,8.92c-6.66,4.08-10.93,7.65-12.83,10.7
   c-1.89,3.06-3.28,8.81-4.16,17.24l-0.97,9.26c-1.19,11.38-0.47,18.76,2.14,22.13c2.61,3.37,5.7,5.05,9.25,5.05
   c2.71,0,5.16-1.01,7.33-3.02c2.17-2.01,4.08-5.03,5.75-9.06l-1.05,10.05h19.75l5.9-56.58c1.94-18.63,2.87-30.94,2.79-36.91
   c-0.08-5.97-1.65-11.01-4.7-15.12c-3.06-4.11-8.02-6.16-14.89-6.16c-5.73,0-10.58,1.81-14.54,5.44c-3.96,3.63-6.79,7.8-8.47,12.53
   c-1.68,4.73-2.98,11.46-3.89,20.18l-0.79,7.56h19.05L404.47,141.09z M405.64,191.55c-0.59,5.66-1.15,9.16-1.67,10.49
   c-0.52,1.33-1.42,2-2.7,2c-1.34,0-2.15-0.85-2.42-2.55c-0.27-1.7-0.11-5.46,0.5-11.3c0.53-5.1,1.2-9,2-11.72
   c0.8-2.72,3.04-6.09,6.71-10.11L405.64,191.55z"/>
<path class="st0" d="M480.08,127.24c-0.64-5.78-2.63-10.56-5.99-14.36c-3.36-3.79-7.68-5.69-12.98-5.69
   c-5.33,0-10.05,1.91-14.17,5.73c-4.12,3.82-7,8.17-8.65,13.04c-1.65,4.87-2.97,12.09-3.97,21.66l-3.34,32.03
   c-1.15,10.99-1.34,19.47-0.57,25.44c0.77,5.98,2.65,10.62,5.66,13.93c3,3.31,7.37,4.97,13.1,4.97c4.49,0,8.38-1.2,11.68-3.61
   c3.3-2.41,6.14-5.97,8.53-10.7c2.39-4.73,3.99-9.34,4.81-13.85c0.82-4.5,1.72-11.26,2.69-20.26h-18.09l-1.4,13.42
   c-0.61,5.83-1.27,9.8-1.97,11.89c-0.7,2.1-1.74,3.14-3.12,3.14c-1.17,0-1.96-1-2.35-3.02c-0.39-2.01-0.38-5.03,0.04-9.05l5.55-53.18
   c0.51-4.93,1.05-8.1,1.6-9.51c0.55-1.42,1.41-2.12,2.58-2.12c1.17,0,1.89,0.81,2.16,2.42c0.27,1.61,0.16,4.69-0.31,9.22l-1.36,13
   h19.15C480.48,141.2,480.72,133.02,480.08,127.24z"/>
<path class="st0" d="M513.94,109.23l-9.77,32.93l6-57.74h-20.3l-14.35,137.53h20.3l5.15-49.13l1.21,49.13h19.53l-3.63-67.83
   l12.93-44.9H513.94z"/>
</svg>
<button class="boton" value"Entrar">Ingresar</button></div>
					<div class="loading">
						<span class="loads"></span>
						<span class="loads"></span>
						<span class="loads"></span>
						<span class="loads"></span>
						<span class="loads"></span>
						<span class="loads"></span>
						<span class="loads"></span>
						<span class="loads"></span>
					</div>`
}

const Animacion = () => {
	anime ({
		targets: '.loads',
		translateY: 60,
		scale: [
			{value: .1, easing: 'easeOutSine', duration: 500},
			{value: 1, easing: 'easeInOutQuad', duration: 1200}
		  ],
		loop: true,
		direction: 'alternate',
		delay: anime.stagger(50)
	})
}

const Svganime = () => {
	anime({
		targets: '.st0',
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutQuad',
		duration: 3000,
		direction: 'alternate',
		loop: true
	})
}
