import '../../scss/components/ProductBox.scss';
import Image from "next/image";

type ProductBoxProps = {
    heading: string;
    paragraphCopy: string;
    image: string;
    imageAlt: string;
};

function ProductBox(
    {
        heading = '',
        paragraphCopy = '',
        image = '',
        imageAlt = '',
    }: ProductBoxProps,
) {

    return (
        <div className="ProductBox">
            <div className="ProductBox__image">
                <Image src={image} alt={imageAlt} fill style={{objectFit: "cover"}} />
            </div>
            <div className="ProductBox__content">
                <div className="ProductBox__heading">
                    <h2>{heading}</h2>
                </div>
                <div className="ProductBox__copy">
                    <p>
                        {paragraphCopy}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductBox;