import Image from "next/image";

interface BannerProps {
    src: string;
}

const Banner: React.FC<BannerProps> = ({ src }) => {
    return (

        <Image className="rounded-xl w-full" src={src} alt="Banner" width={1920} height={1080} />

    );
};

export default Banner;