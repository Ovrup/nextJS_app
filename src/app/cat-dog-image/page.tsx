import { getLogger, setLogger } from "src/utils/logging/logger";
import { getCatDogData } from "../../apis/method";
import ImageGallery from "../../components/ImageGalleryComponent/ImageGallery";
import styles from "../page.module.scss";
import ConsoleLogger from "src/utils/logging/consoleLogger";

type SearchParamsType = {
    type: string,
    breed_ids: string,
    page: string
}

const CatDogBreedImages = async ({ searchParams }: { searchParams: SearchParamsType }) => {
    const { type, breed_ids, page } = searchParams;
    setLogger(new ConsoleLogger())
    const logger = getLogger();
    let data;

    try {
        data = await getCatDogData(type, breed_ids, page);
        logger.info('Cat/Dog breeds images fetched successfully')
    } catch {
        logger.error('Error fetching breeds iamges')
    }


    return (
        <main className={styles.main}>
            <ImageGallery data={data} />
        </main>
    )
}

export default CatDogBreedImages