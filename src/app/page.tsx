import ImageGallery from '../components/ImageGalleryComponent/ImageGallery'
import styles from "./page.module.scss";
import { getCatDogData } from '../apis/method';
import { CAT, DOG } from '../constants';
import { getLogger } from 'src/utils/logging/logger';

export const metadata = {
  title: 'Poppulo'
}

export default async function Home() {
  const logger = getLogger();
  let data;
  try {
    data = await getCatDogData(DOG);
    console.log('catdog data', data)
    logger.info('Cat/Dog images fetched successfully')

  } catch {
    logger.error('Error fetching images')
  }


  return (
    <main className={styles.main}>
      <ImageGallery data={data} />
    </main>
  );
}
