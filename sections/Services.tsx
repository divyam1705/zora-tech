import ServiceCard from "@/components/ServiceCard";
import { FlipWords } from "@/components/ui/flip-words";
import { services } from "@/data/services";
export const Services = () => {

    const dynamicWords = ["Data Migration", "Data Archiving", "Master Data Management", "Data Integration"];


    return <section className="py-16 px-5">
        <div className="flex flex-col items-center">
            <div className="section-heading">
                <div className="flex flex-col h-48 items-center">
                    <div className="tag">Services</div>
                    <h2 className="section-title mt-5">
                        Expert Solutions in
                    </h2>
                    <FlipWords className="section-title mt-2 text-[#001E80]" words={dynamicWords} />
                </div>

                <p className="section-description mt-5">
                    Zora Technologies Inc. delivers expert solutions in data migration, archiving, management, and integration to streamline your business operations.
                </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-14">
                {services.map((service) => (
                    <ServiceCard key={service.name}
                        service={service}
                    />
                ))}

            </div>
        </div>
    </section>;
};