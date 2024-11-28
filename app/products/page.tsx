import Breadcrumb from "@/components/Common/Breadcrumb";
import Products from "./Products"; // Import the new client component

export const metadata = {
  title: "Our Products | Innovative Solutions by D&Q Technologies",
  description: "Explore our innovative products designed to enhance your business efficiency.",
};

const ProductsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Products"
        description="Discover our innovative solutions crafted to elevate your business operations and drive success."
      />
      <Products /> 
    </>
  );
};

export default ProductsPage;
