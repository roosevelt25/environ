// import React from "react";
import { Link } from "react-router-dom";
import Depot from "../images/depot.jpg";
// import Recyclage from "../images/recyclage-dechets.jpg";
import CustomTextSection from "../components/CustomTextSection";
import CustomCard from "../components/CustomCard";
import TestimonialCard from "../components/TestimonialCard";
import Yellow from "../images/yellow.png";
import Blue from "../images/blue.png";
import Green from "../images/green.png";
import Red from "../images/red.png";
import NewsletterForm from "../components/NewsLetter";
import Waste from "../images/waste.jpg";
import GallerieSection from "../components/GallerieSection";
import Logorec from "../images/logo recyclage.png";
import BlogCard from "../components/BlogCard";
import PartnerLogos from "../components/PartnerLogos";

function Home() {
  return (
    <>
      <div className="bg-[url('/src/images/home-picture.jpg')] bg-cover bg-center relative flex flex-col h-full w-full py-5 md:py-8 lg:py-10 xl:py-20">
        <div className="absolute w-full h-full bg-black top-0 left-0 bg-opacity-25 z-0"></div>
        <div className="font-semibold text-white max-w-screen-xl mx-auto w-full z-10 space-y-5 md:space-y-7 lg:space-y-10">
          <div className="flex items-center text-3xl lg:text-5xl font-serif w-full md:w-1/2">
            <h2 className="leading-[1.20]">
              Les déchets d&apos;aujourd&apos;hui sont les problèmes de demain.
              Faisons en sorte qu&apos;il n&apos;y ait pas de place pour eux
              dans notre avenir.
            </h2>
          </div>
          <div className="text-sm">
            <button className="font-bold text-xl text-[#3d692c] border border-[#3d692c] hover:text-white w-full md:w-auto hover:border-[#f6faf3] flex items-center justify-center focus:outline-none bg-[#fff] hover:bg-[#3d692c] focus:ring-4 rounded-lg px-6 py-2 dark:text-white dark:border-[#3d692c] dark:hover:bg-[#3d692c]">
              <Link>Devenez un Gardien</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto py-10 lg:py-16 xl:py-20">
        <h3 className="text-center font-bold text-2xl md:text-3xl max-w-screen-sm mx-auto mb-5 md:mb-10 lg:mb-16">
          Éveillez-vous : Le Désastre des Déchets et le Futur Fragile de nos
          Enfants
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 items-center">
          <div className="w-full">
          <img
              src={Depot}
              alt="World"
              className="h-96 w-full object-cover rounded-full"
            />
          </div>
          <div className="w-full space-y-5">
            <p>
              Imaginez un instant un monde sans vie et vous êtes la dernière
              personne vivante au milieu des déchets. Les déchets s&apos;étendent à
              perte de vue, étouffant toute forme de vie. Les océans, autrefois
              grouillants de vie, sont désormais des étendues stériles, polluées
              par des tonnes de plastique et des débris toxiques.
            </p>
            <p>
              Les forêts luxuriantes ont cédé la place à des paysages arides et
              dévastés par la déforestation. Les phénomènes naturels se
              déchaînent avec une violence inouïe, les tempêtes, les inondations
              et les incendies ravageant tout sur leur passage, exacerbés par le
              réchauffement climatique que nous avons ignoré pendant trop
              longtemps. Les ressources naturelles s'épuisent, l'air devient
              irrespirable, l'eau non potable. Dans ce monde apocalyptique, les
              conséquences de notre négligence sont devenues irréversibles.
            </p>
            <p>
              Mais ce cauchemar n'est pas inévitable. En prenant des mesures
              drastiques dès maintenant pour réduire notre empreinte écologique,
              nous pouvons encore changer le cours des choses et préserver notre
              planète pour les générations futures.
            </p>
          </div>
        </div>
        
      </div>

      <div className="py-16">
        <div className="text-center font-serif text-[#13250e] px-4 md:px-[10rem]">
          <h1 className="text-3xl font-bold">
            Tri des Déchets : Le Premier Pas vers un Avenir Durable.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-16 gap-5 pt-10">
          <CustomCard
            title="La Poubelle Bleue : Votre Alliée dans la Lutte contre le Plastique"
            description="Dans notre société moderne, le plastique est omniprésent, mais saviez-vous que beaucoup de ces produits peuvent être recyclés?"
            buttonText="En savoir plus"
            imageSrc={Blue}
          />

          <CustomCard
            title="La Poubelle Jaune : La Voie vers un Recyclage Renouvelé"
            description="La poubelle jaune est un symbole de l'engagement envers le recyclage des emballages. Mais que pouvez-vous y mettre exactement?"
            buttonText="En savoir plus"
            imageSrc={Yellow}
          />

          <CustomCard
            title="La Poubelle Verte : L'Engagement pour un Avenir Écologique"
            description="Le compostage est une excellente façon de réduire les déchets organiques tout en enrichissant votre sol. Si vous avez une poubelle verte à la maison, vous avez déjà tout ce dont vous avez besoin pour commencer à composter."
            buttonText="En savoir plus"
            imageSrc={Green}
          />

          <CustomCard
            title="Poubelle Rouge : Stop aux Déchets Dangereux"
            description="Certains déchets ne peuvent pas simplement être jetés à la poubelle comme les autres. Les déchets dangereux, tels que les piles, les produits chimiques ménagers et les médicaments périmés, nécessitent une élimination spéciale pour éviter de nuire à l'environnement et à la santé publique."
            buttonText="En savoir plus"
            imageSrc={Red}
          />
        </div>
      </div>

      <div className="md:w-full flex flex-row md:flex-row items-center justify-center bg-[url('/src/images/recyclage-dechets.jpg')] bg-cover bg-center h-80 md:h-[80]">
        <div className="grid items-center justify-center text-[#000] md:w-[60%] mx-auto">
          <h3 className="font-bold text-3xl mb-4">
            Sauvons notre planète, agissons maintenant!
          </h3>
          <p className="font-bold text-2xl mb-4 ml-20">
            Chaque geste compte pour préserver l'avenir.
          </p>
          <p className="font-bold text-xl mb-4 ml-40">
            Ensemble, faisons la différence.
          </p>
          <button className="md:w-48 w-32 border border-[#13250e] flex justify-center items-center h-10 font-mono font-semibold text-[#13250e] mt-10 ml-[12rem] bg-[#f6faf3] rounded-xl">
            <Link>Sauve le monde</Link>
          </button>
        </div>
      </div>

      <div className="flex justify-center px-10 py-5 pt-10 items-center text-[#13250e]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="md:w-[20rem]">
            <div className="static bg-[url('/src/images/save-world.jpeg')] bg-cover bg-center md:w-[20rem] md:h-[90%]">
              <div className="flex flex-col">
                <div className="flex justify-center p-5 items-center ml-[15rem] bg-[#e9f5e3] md:h-[10rem] md:w-[9rem]">
                  <p className="font-medium">
                    Sauvons les 7,25 milliards de vies.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:h-[2.4rem] flex items-center bg-[#e9f5e3] pl-5 md:w-[100%] text-black">
              <p>Engagez-vous comme bénévole!</p>
            </div>
          </div>
          <div className="ml-8 md:w-[20rem] pt-4">
            <div className="font-bold text-2xl">
              <h4>Rejoignez la course pour un monde meilleur</h4>
            </div>
            <div className="pt-2">
              <p>
                La course pour un monde meilleur, où chaque action compte.
                Ensemble, faisons avancer la cause de la durabilité et de
                l'égalité pour tous.
              </p>
            </div>
            <div className="pt-4 grid grid-cols-1 md:grid-cols gap-4">
              <CustomTextSection text="Journée de sensibilisation au recyclage" />
              <CustomTextSection text="Nettoyage de l'environnement" />
              <CustomTextSection text="Atelier de réparation et de réutilisation" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center pt-5 p-6">
        <div className="grid justify-center items-center md:w-[60rem] text-[#13250e]">
          <div className="grid items-center md:ml-[10rem]">
            <h2 className="text-4xl font-bold pt-6">Témoignages Inspirants</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:w-[50rem] my-10 mb-8 rounded-lg shadow-sm md:mb-12 gap-3 dark:bg-gray-800">
            <TestimonialCard
              name="John Doe"
              testimonial="La journée de sensibilisation au recyclage était géniale! Maintenant, je sais comment protéger notre planète en recyclant correctement."
              imageUrl={Red}
            />
            <TestimonialCard
              name="Irène Da silva"
              testimonial="Nettoyer l'environnement, c'était super amusant! Maintenant, je sais que chaque déchet ramassé fait une différence pour notre planète."
              imageUrl="/path/to/john-doe-profile.jpg"
            />
            <TestimonialCard
              name="John Doe"
              testimonial="J'ai adoré l'atelier de réparation! Maintenant, je sais comment donner une seconde vie à mes vieux jouets et éviter de les jeter."
              imageUrl="/path/to/john-doe-profile.jpg"
            />
          </div>
        </div>
      </div>

      <NewsletterForm />

      <div className=" flex justify-center items-center h-[20rem] w-full my-10 pt-6">
        <div className="grid grid-cols-3 items-center text-[#13250e] w-[49rem] gap-5 px-5">
          <div className="text-2xl font-bold">
            <h4>
              Vers un Avenir Lumineux : Notre Engagement envers la Gestion des
              Déchets pour les Enfants
            </h4>
          </div>
          <div className="text-[0.60rem] h-[10rem] ">
            <p>
              Dans notre engagement envers la gestion des déchets pour les
              enfants, nous nous efforçons de créer un avenir lumineux où chaque
              enfant peut grandir dans un environnement propre et sain. En
              travaillant main dans la main avec les jeunes générations, nous
              visons à les éduquer sur l'importance de prendre soin de notre
              planète et à les inspirer à agir pour un futur meilleur. En leur
              offrant des opportunités d'apprentissage et d'action, nous les
              encourageons à devenir des champions de l'environnement, prêts à
              relever les défis de la durabilité et de la protection de notre
              monde pour les années à venir. Rejoignez-nous dans cette mission
              pour un avenir plus propre et plus radieux pour nos enfants et les
              générations futures.
            </p>
          </div>
          <div>
            <img src={Waste} alt="" />
          </div>
        </div>
      </div>

      <GallerieSection />

      <div className="flex flex-col justify-between items-center md:h-48 pt-5 h-full w-full py-5 p-10 bg-[#d3eac8]">
        <div className="md:flex  md:flex-row justify-center gap-10 w-2/3 md:w-[48rem] text-[#4c8435] h-full">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4 font-bold">
              <img
                src={Logorec}
                alt="Recyclage"
                className="w-16 md:w-16 bg-cover bg-center h-16"
              />
              <p className="text-xl w-[19rem]">
                Prêt à devenir un héros de l'environnement? Rejoins-nous pour
                notre grand nettoyage écologique!
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button className="bg-[#3d692c] border border-[#345427] text-[#f6faf3] w-48 md:w-36 h-14 font-medium text-xl">
              Participer
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center pt-10 py-5 ">
        <div className="grid grid-cols-3 justify-between  w-[45rem] ">
          <div className="container mx-auto px-4">
            <BlogCard
              imageUrl="/path/to/your/image.jpg"
              title="Titre de l'article"
              excerpt="Extrait de l'article..."
              link="/chemin/vers/plus-de-lectures"
            />
            {/* Vous pouvez ajouter plus de BlogCard ici pour afficher plusieurs articles */}
          </div>
          <div className="container mx-auto px-4">
            <BlogCard
              imageUrl="/path/to/your/image.jpg"
              title="Titre de l'article"
              excerpt="Extrait de l'article..."
              link="/chemin/vers/plus-de-lectures"
            />
            {/* Vous pouvez ajouter plus de BlogCard ici pour afficher plusieurs articles */}
          </div>
          <div className="container mx-auto px-4">
            <BlogCard
              imageUrl="/path/to/your/image.jpg"
              title="Titre de l'article"
              excerpt="Extrait de l'article..."
              link="/chemin/vers/plus-de-lectures"
            />
            {/* Vous pouvez ajouter plus de BlogCard ici pour afficher plusieurs articles */}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full h-[10rem] bg-emerald-900 bg-opacity-20 ">
        <div className="container mx-auto px-4  text-center">
          <h2 className="text-2xl font-bold mb-4">Nos Partenaires</h2>
          <PartnerLogos
            logos={[
              "/path/to/partner2-logo.png",
              "/path/to/partner2-logo.png",
              "/path/to/partner2-logo.png",
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
