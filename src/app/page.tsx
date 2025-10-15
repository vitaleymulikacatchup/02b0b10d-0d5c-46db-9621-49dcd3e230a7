"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  {"id": "hero-image", "url": "https://images.pexels.com/photos/7552374/pexels-photo-7552374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Young woman with curly hair working on her laptop in a cozy home setting, exuding confidence and focus."},
  {"id": "about-image", "url": "https://images.pexels.com/photos/5532672/pexels-photo-5532672.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Detailed view of an industrial canning process with aluminum cans on an automatic assembly line."},
  {"id": "product-image1", "url": "https://images.pexels.com/photos/7621136/pexels-photo-7621136.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Modern contactless payment using a card and terminal, highlighting the ease of digital transactions."},
  {"id": "product-image2", "url": "https://images.pexels.com/photos/34247966/pexels-photo-34247966.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Free stock photo of alcohol, beverage, celebration"},
  {"id": "product-image3", "url": "https://images.pexels.com/photos/9594428/pexels-photo-9594428.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Three minimalist cardboard packages labeled 'CLOTH' on a yellow background."},
  {"id": "contact-image", "url": "https://images.pexels.com/photos/3796810/pexels-photo-3796810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Smiling African American waitress wearing casual t shirt and apron standing at counter in cozy coffee shop with female customer while serving hot drink and looking at each other"}
];

const navbarItems = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Products", id: "products" },
  { name: "Contact", id: "contact" }
];

const products = [
  { id: "1", name: "Zyn Citrus", price: "$4.99", imageSrc: assetMap.find(a => a.id === "product-image1")?.url },
  { id: "2", name: "Zyn Cool Mint", price: "$4.99", imageSrc: assetMap.find(a => a.id === "product-image2")?.url },
  { id: "3", name: "Zyn Spearmint", price: "$4.99", imageSrc: assetMap.find(a => a.id === "product-image3")?.url }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple navItems={navbarItems} logoSrc="/brand/zyn-logo.png" brandName="Zyn Snus" />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6 text-gray-800">
          <HeroBillboard
            title="Discover Zyn Snus"
            description="Experience the future of tobacco-free snus."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url}
            buttons={[{ text: "Explore Products", href: "products" }, { text: "Learn More", href: "about" }]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6 text-gray-800">
          <TextSplitAbout
            title="Our Mission"
            description={[
              "Zyn Snus is committed to providing a premium nicotine experience.",
              "Our mission is to enhance your lifestyle with innovation and quality."
            ]}
            imageSrc={assetMap.find(a => a.id === "about-image")?.url}
            showBorder={true}
          />
        </div>
      </div>
      <div id="products" data-section="products" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6 text-gray-800">
          <ProductCardOne
            title="Our Products"
            products={products}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6 text-gray-800">
          <ContactSplit
            tag="Contact Us"
            title="Get in Touch"
            description="We are here to answer any questions you have."
            imageSrc={assetMap.find(a => a.id === "contact-image")?.url}
            inputPlaceholder="Email address"
            buttonText="Submit"
            termsText="By signing up, you agree to our Terms and Conditions."
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6 text-gray-800">
          <FooterBase
            columns={[
              { title: "About", items: [{ label: "Our Mission", href: "about" }, { label: "Contact", href: "contact" }] },
              { title: "Policies", items: [{ label: "Privacy Policy", href: "privacy" }, { label: "Terms & Conditions", href: "terms" }] }
            ]}
            logoSrc="/brand/zyn-logo-footer.png"
            copyrightText="© 2023 Zyn Snus"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
