import prismadb from "@/lib/prismadb";
import CategoryForm from "./components/CategoryForm";

const CategoryPage = async ({
  params,
}: {
  params: { categoryId: string; storeId: string };
}) => {
  // Ensure that categoryId is provided
  if (!params.categoryId) {
    // Handle the case where categoryId is missing, e.g., show an error message or redirect
    return (
      <div className="flex-1 space-y-4 p-8 pt-6">
        <p>Error: Category ID is missing.</p>
      </div>
    );
  }

  const category = await prismadb.category.findUnique({
    where: {
      id: params.categoryId,
    },
  });

  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm initialData={category} billboards={billboards} />
      </div>
    </div>
  );
};

export default CategoryPage;
