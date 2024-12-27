// pages/faq/index.js
import FAQClient from "@/components/faqClient/faqclient";
import { faqsData } from "@/utils/faqs";

export async function getServerSideProps() {
  const faqs = faqsData(); 
  return {
    props: { faqs },
  };
}

export default function FAQPage({ faqs }) {
  return (
    <div>
      <FAQClient faqs={faqs} />
    </div>
  );
}
