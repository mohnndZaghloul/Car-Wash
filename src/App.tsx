import Nav from "./components/templets/Nav";
import Img1 from "../src/assets/img1.jpg";
import Img2 from "../src/assets/img2.jpg";
import Img3 from "../src/assets/img3.jpg";
import Imga1 from "../src/assets/imga1.jpg";
import Imga2 from "../src/assets/imga2.jpg";
import Imgb1 from "../src/assets/imgb1.jpg";
import Imgb2 from "../src/assets/imgb2.jpg";
import video2 from "../src/assets/video2.mp4";
import video4 from "../src/assets/video4.mp4";
import video5 from "../src/assets/video5.mp4";
import video6 from "../src/assets/video6.mp4";
import { HeroParallax } from "./components/ui/hero-parallax";
import { motion } from "framer-motion";

function App() {
  const products = [
    {
      title: "Moonbeam",
      thumbnail: Img1,
    },
    {
      title: "Cursor",
      thumbnail: Img2,
    },
    {
      title: "Rogue",
      thumbnail: Img3,
    },

    {
      title: "Editorially",
      thumbnail: Imga1,
    },
    {
      title: "Editrix AI",
      thumbnail: Imga2,
    },
    {
      title: "Pixel Perfect",
      thumbnail: Imgb1,
    },

    {
      title: "Algochurn",
      thumbnail: Imgb2,
    },
    {
      title: "Editorially",
      thumbnail: Imga1,
    },
    {
      title: "Editrix AI",
      thumbnail: Imga2,
    },
    {
      title: "Pixel Perfect",
      thumbnail: Imgb1,
    },

    {
      title: "Algochurn",
      thumbnail: Imgb2,
    },
  ];

  return (
    <main
      dir="rtl"
      className="w-full capitalize bg-gradient-to-br from-black to-dark text-secondary">
      <div className="fixed h-full w-full capitalize bg-gradient-to-br from-black to-dark text-secondary" />
      <Nav />
      <section dir="ltr">
        <HeroParallax products={products} />
      </section>
      <section>
        <p className="text-lg relative text-center bg-primary bg-opacity-20 py-20 container">
          غسيل السيارات بالبخار تنظيف كافة أجزاء السيارة من الداخل مثل الديكور
          والمراتب والأرضيات والأسقف وإزالة كافة البقع الداخلية والخارجية وتلميع
          الهيكل وتلميع خارجي كامل بجودة عالية. وتلميع الحافات والإطارات ومحرك
          السيارة وصندوق السيارة من الداخل استمتع بتجربة التنظيف مع خدماتنا
          المتميزة لغسيل السيارات
        </p>
      </section>
      <section className="relative container pb-10">
        <div className="py-20 flex gap-4 justify-center items-center">
          <motion.div
            whileInView={{ y: 80, transition: { duration: 0.8 } }}
            className="w-1/5 rounded-2xl overflow-hidden">
            <video controls muted>
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <div className="w-1/5 rounded-2xl overflow-hidden">
            <video controls muted>
              <source src={video4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <motion.div
            whileInView={{ y: 80, transition: { duration: 0.8 } }}
            className="w-1/5 rounded-2xl overflow-hidden">
            <video controls muted>
              <source src={video5} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <div className="w-1/5 rounded-2xl overflow-hidden">
            <video controls muted>
              <source src={video6} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <motion.div
            whileInView={{ y: 80, transition: { duration: 0.8 } }}
            className="w-1/5 rounded-2xl overflow-hidden">
            <video controls muted>
              <source src={video5} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default App;
