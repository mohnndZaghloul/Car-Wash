import Nav from "./components/templets/Nav";
import Img1 from "../src/assets/img1.jpg";
import Img2 from "../src/assets/img2.jpg";
import Img3 from "../src/assets/img3.jpg";
import Img4 from "../src/assets/img5.jpg";
import Img5 from "../src/assets/img6.jpg";
import Img6 from "../src/assets/img7.jpg";
import Imga1 from "../src/assets/imga1.jpg";
import Imga2 from "../src/assets/imga2.jpg";
import Imgb1 from "../src/assets/imgb1.jpg";
import Imgb2 from "../src/assets/imgb2.jpg";
import video2 from "../src/assets/video2.mp4";
import video4 from "../src/assets/video4.mp4";
import video5 from "../src/assets/video5.mp4";
import video6 from "../src/assets/video6.mp4";
import video7 from "../src/assets/video7.mp4";
import video8 from "../src/assets/video8.mp4";
import video9 from "../src/assets/video9.mp4";
import video10 from "../src/assets/video10.mp4";
import { HeroParallax } from "./components/ui/hero-parallax";
import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

function App() {
  const products = [
    {
      title: "image1",
      thumbnail: Img1,
    },
    {
      title: "image2",
      thumbnail: Img2,
    },
    {
      title: "image3",
      thumbnail: Img3,
    },
    {
      title: "image4",
      thumbnail: Img4,
    },
    {
      title: "image5",
      thumbnail: Img6,
    },
    {
      title: "image6",
      thumbnail: Img5,
    },
    {
      title: "image7",
      thumbnail: Imga1,
    },
    {
      title: "image8",
      thumbnail: Imgb1,
    },
    {
      title: "image8",
      thumbnail: Imga2,
    },
    {
      title: "image9",
      thumbnail: Imgb2,
    },
  ];
  return (
    <main dir="rtl" className="capitalize text-secondary">
      <div className="fixed top-0 left-0 h-full w-full capitalize -z-10 bg-gradient-to-br from-black to-dark text-secondary" />
      <Nav />
      <section dir="ltr" className="overflow-hidden">
        <HeroParallax products={products} />
      </section>
      <section className="bg-primary bg-opacity-20 py-10 lg:py-16">
        <div className="container">
          <h1 className="text-4xl lg:text-6xl font-bold pb-4">من نحن ؟</h1>
          <p className="text-lg relative leading-8">
            شركة الاتقان
            <ul>
              <li>
                :- غسيل وتعقيم وتعطير المجالس والسجاد والكنب والستاير بمواد 3M
                خدمة فوق الممتاز 24 ساعة
              </li>
              <li> :-تنظيف وتعقيم وتعطير المساجد كامل</li>
              <li>
                :- غسيل السيارات ب البخار تنظيف جميع أجزاء السيارة من الداخل مثل
                الديكور والمراتب والارضيات والسقف وأزالة جميع البقع من الداخل
                والخارج وتلميع البودى وتلميع خارجى كامل عالى الجوده وتلميع
                الجنوط والكفارات وموتور السيارة والشنطه من الداخل كل هذا ب
                استخدام مواد تنظيف وتلميع مستوردة ومياه مفلترة محافظه كامله على
                اجزاء السيارة و الاهتمام بها
              </li>
            </ul>
          </p>
        </div>
      </section>
      <section id="videos" className="container py-10">
        <div className="flex items-center justify-center flex-col lg:flex-row text-center gap-y-4 text-2xl lg:text-4xl">
          <p>اتصل بنا الان جوال علي الرقم</p>
          <a
            aria-label="WhatsApp - Send message via WhatsApp"
            className="ps-1 hover:underline transition"
            target="_blank"
            href="tel:+966551916679">
            551916679
          </a>
        </div>
        <div className="flex items-center justify-center flex-col lg:flex-row text-center gap-y-4 text-2xl lg:text-4xl pt-4">
          <p>تواصل معنا علي الوتس اب علي الرقم</p>
          <a
            aria-label="WhatsApp - Send message via WhatsApp"
            className="ps-1 hover:underline transition"
            target="_blank"
            href="https://wa.me/+966551226023">
            551226023
          </a>
        </div>
        <div className="py-10 lg:py-20 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 justify-center items-center">
          <motion.div
            whileInView={{ y: 80, transition: { duration: 0.8 } }}
            className="w-full rounded-2xl overflow-hidden">
            <video controls loop autoPlay muted>
              <source src={video8} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <div className="w-full rounded-2xl overflow-hidden">
            <video controls loop autoPlay muted>
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <motion.div
            whileInView={{ y: 80, transition: { duration: 0.8 } }}
            className="w-full rounded-2xl overflow-hidden">
            <video controls loop autoPlay muted>
              <source src={video5} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <div className="w-full rounded-2xl overflow-hidden">
            <video controls loop autoPlay muted>
              <source src={video6} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <motion.div
            whileInView={{ y: 80, transition: { duration: 0.8 } }}
            className="w-full rounded-2xl overflow-hidden">
            <video controls loop autoPlay muted>
              <source src={video7} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <div className="w-full rounded-2xl overflow-hidden">
            <video controls loop autoPlay muted>
              <source src={video9} type="video/mp4" />
              <source src={video9} type="video/ogg" />
              <source src={video9} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <motion.div
            whileInView={{ y: 80, transition: { duration: 0.8 } }}
            className="w-full rounded-2xl overflow-hidden">
            <video controls loop autoPlay muted>
              <source src={video10} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <div className="w-full rounded-2xl overflow-hidden">
            <video controls loop autoPlay muted>
              <source src={video4} type="video/mp4" />
              <source src={video4} type="video/ogg" />
              <source src={video4} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <footer>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 0.8 } }}
          className="fixed bottom-10 left-10">
          <div className="bg-black rounded-full p-6 mb-4">
            <a
              aria-label="Phone Number - Call"
              target="_blank"
              href="tel:+966551916679">
              <FaPhone
                className="animate-pulse hover:scale-110 transition duration-300 cursor-pointer"
                size={32}
              />
            </a>
          </div>
          <div className="bg-black rounded-full p-6">
            <a
              aria-label="WhatsApp - Send message via WhatsApp"
              target="_blank"
              href="https://wa.me/+966551226023">
              <FaWhatsapp
                className="animate-pulse hover:scale-110 transition duration-300 cursor-pointer"
                size={32}
              />
            </a>
          </div>
        </motion.div>
      </footer>
    </main>
  );
}

export default App;
