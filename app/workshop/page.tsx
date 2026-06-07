// mock content

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollReveal from "../components/ScrollReveal";

export default function WorkshopPage() {
    return <div>
        <Navbar />
        <ScrollReveal />
        <section className="py-16 md:py-24 text-center px-4">
            <h1 className="font-serif text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-bold text-primary mb-4 tracking-[-0.02em]">
                Workshop của chúng tôi
            </h1>
            <p className="font-sans text-[18px] leading-[28px] text-secondary max-w-2xl mx-auto">
                Dạy pha chế chuyên nghiệp, uy tín tại Hội An
            </p>
        </section>
        {/* <Footer /> */}
    </div>
}