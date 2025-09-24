import { useState } from 'react'
import './App.css'
import camisabra1 from './assets/camisabra1.jpg'
import camisabra2 from './assets/camisabra2.jpg'
import camisabra3 from './assets/camisabra3.jpg'
import LogoPuma from './assets/logo-puma-branco.png'
import LogoInsta from './assets/instagram.svg'
import LogoDiscord from './assets/discord.svg'
import LogoWhats from './assets/whatsapp.svg'
import camisa1foto from './assets/camisa1foto.jpg'
import camisa2foto from './assets/camisa2foto.jpg'
import camisa3foto from './assets/camisa3foto.jpg'
import camisa4foto from './assets/camisa4foto.jpg'
import Slider2 from './assets/slider2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
          {/* Aqui fica o SLIDER */}  
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesperView={1}
              autoplay={{
              delay: 3000,
              disableOnInteraction: false,
                }}
            loop={true}
            className='mySwiper'
          >
            <SwiperSlide>
              <img src={camisa1foto} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={camisa2foto} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={camisa3foto} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={camisa4foto} alt="" />
            </SwiperSlide>
          </Swiper>
        </header>
        <section className="produtos">
          
          {/* Card 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={camisabra1} alt="" className="img-card"/>
              <h2>Camisa da Seleção do Brasil</h2>
              <p className="desc">Colorida, vibrante e cheia de atitude, essa camisa reserva infantil traduz a energia e a diversidade do Brasil</p>
              <p className="classificacao"> <span>★ ★ ★ ★ ☆</span> (100)</p>
              <p className="preco">R$ 332,99</p>
              <p className="off">- 7%</p>
            </div>
          </a>

          {/* Card 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={camisabra2} alt="" className="img-card"/>
              <h2>Camiseta da Seleção do Brasil CBF Masculina Dry</h2>
              <p className="desc">Produzida com tecido que utiliza tecnológico , ela garante alta respirabilidade e rápida absorção do suor, proporcionando máximo conforto em treinos ou na torcida.</p>
              <p className="classificacao"> <span>★ ★ ★ ★ ☆</span> (100)</p>
              <p className="preco">R$ 94,99</p>
              <p className="off">- 5%</p>
            </div>
          </a>

          {/* Card 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={camisabra3} alt="" className="img-card"/>
              <h2>Camiseta do Brasil Polo Estrelas</h2>
              <p className="desc">Qualidade Liga Retrô Visual Retrô Tecido 100% algodão premium</p>
              <p className="classificacao"> <span>★ ★ ★ ★ ☆</span> (479)</p>
              <p className="preco">R$ 169,90</p>
              <p className="off">- 10%</p>
            </div>
          </a>

        </section>
        <section className="destaque">

          <iframe src="https://www.youtube.com/embed/DFR6j5GN51k?autoplay=1&mute=1&controls=0&loop=1&playlist=DFR6j5GN51k&modestbranding=1&showinfo=0" frameborder="0" allow="autoplay; fullscreen"></iframe>

        </section>

        <footer>

          <img src={LogoPuma} alt="" className="logo-footer" />

          <div className="social-footer">
            <div className="icon-social">
              <a href="https://www.instagram.com/pumabrasil/" target="_blank">
                <img src={LogoInsta} alt="" className="instagram" />
              </a>
            </div>
            <div className="icon-social">
              <a href="https://discord.com/invite/puma" target="_blank">
                <img src={LogoDiscord} alt="" className="discord" />
              </a>
            </div>
            <div className="icon-social">
              <a href="https://web.whatsapp.com/" target="_blank">
                <img src={LogoWhats} alt="" className="whatsapp" />
              </a>
            </div>
          </div>

          <p className="txt-footer">
            PUMA SPORTS LTDA CNPJ 05.406.034/0023-00 Inscrição Estadual 278.205.224.119 Endereço: Rua Passadena 104 - Parque Industrial, Cotia - SP CEP: 06715864.
          </p>

        </footer>
      </main>
    </>
  )
}

export default App
