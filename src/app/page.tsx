import ImageSection from '@/templates/components/ImageSection';
import { CLIENT_STATIC_FILES_PATH } from 'next/constants';
import Box from '@/templates/components/Box';
import SimpleSection from '@/templates/components/SimpleSection';
import Title from '@/templates/components/Title';


export default function Home() {
  const image_section_1_webp = "assets/images/home/home--image-section-1.webp";
  const image_section_1_webp_2x = "assets/images/home/home--image-section-1@2x.webp";
  // const image_section_1_png = CLIENT_STATIC_FILES_PATH + "images/home/home--image-section-1.png";
  // const image_section_1_png_2x = CLIENT_STATIC_FILES_PATH + "images/home/home--image-section-1@2x.png";

  console.log(image_section_1_webp);

  return (
    <main className="flex flex-col">
      <ImageSection image_webp={image_section_1_webp}
                    image_webp_2x={image_section_1_webp_2x}>
        <Box heading_tag={'h1'}
             heading_text={'Montaż rolet okiennych we Wrocławiu'}
             secondary_text={'Rolety Wrocław - profesjonalne doradztwo, bezpłatny pomiar, 2-letnia gwarancja. Skorzystaj już teraz!'}/>
      </ImageSection>
      <SimpleSection>
        <div className="py-32">
          <Title heading_tag={'h2'}
                 heading_text={'Oferta specjalna dla <br> Ciebie'}
                 heading_size={'48'}
                 custom_class={'text-center'}></Title>
          <h1 className="center"></h1>
        </div>
      </SimpleSection>
    </main>
  );
}
