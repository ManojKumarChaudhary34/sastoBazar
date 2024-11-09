import { Formik, Form, Field } from "formik";
import { object, string, z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import clsx from "clsx";
import { addProduct } from "../api";
import { v4 as uuidv4 } from "uuid";

// Define the schema using Zod
const addProductFormSchema = object({
  title: string({
    required_error: "*Please enter a title",
  }),
  price: string({
    required_error: "*Please enter a price",
  }),
  description: string({
    required_error: "*Please enter a description",
  }),
  image: string({
    required_error: "*Image is required",
  }),
  category: z.string().min(3, "*Category must be at least 3 characters long"),
});

const AddProductForm = () => {
  const client = useQueryClient();
  //function to add new product
  const mutation = useMutation({
    mutationFn: addProduct,
    onSuccess: (data) => {
      console.log("Product added successfully:", data);
      alert("Product added successfully");
      client.invalidateQueries(["getProducts"]);
    },
    onError: (error) => {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    },
  });

  return (
    //form
    <Formik
      initialValues={{
        title: "",
        price: "",
        image: "",
        description: "",
        category: "",
      }}
      onSubmit={async (values, { resetForm }) => {
        console.log("form data...", values);

        await mutation.mutateAsync({
          id: uuidv4(),
          title: values.title,
          price: Number(values.price),
          image: values.image,
          description: values.description,
          category: values.category,
        });
        resetForm();
      }}
      validationSchema={toFormikValidationSchema(addProductFormSchema)}
    >
      {({ errors }) => (
        <Form>
          <div className="p-4">
            <div className="mt-4">
              <label className="text-xl font-semibold text-black">
                Image URL
              </label>
              <Field
                type="text"
                name="image"
                placeholder="Enter image url"
                className="rounded-lg w-full border border-gray-300 p-2"
              />
              {!!errors.image && (
                <div className="text-red-500 pt-2">{errors.image}</div>
              )}
            </div>
            <div>
              <label className="text-xl font-semibold text-black">Title</label>
              <Field
                type="text"
                name="title"
                placeholder="Enter title"
                className="rounded-lg w-full border border-gray-300 p-2"
              />
              {!!errors.title && (
                <div className="text-red-500 pt-2">{errors.title}</div>
              )}
            </div>

            <div className="mt-4">
              <label className="text-xl font-semibold text-black">Price</label>
              <Field
                type="text"
                name="price"
                placeholder="Enter price"
                className="rounded-lg w-full border border-gray-300 p-2"
              />
              {!!errors.price && (
                <div className="text-red-500 pt-2">{errors.price}</div>
              )}
            </div>
            <div className="mt-4">
              <label className="text-xl font-semibold text-black">
                Description
              </label>
              <Field
                type="text"
                name="description"
                placeholder="Enter description"
                className="rounded-lg w-full border border-gray-300 p-2"
              />
              {!!errors.description && (
                <div className="text-red-500 pt-2">{errors.description}</div>
              )}
            </div>
            <div className="mt-4">
              <label className="text-xl font-semibold text-black">
                Category
              </label>
              <Field
                type="text"
                name="category"
                placeholder="Enter category"
                className="rounded-lg w-full border border-gray-300 p-2"
              />
              {!!errors.category && (
                <div className="text-red-500 pt-2">{errors.category}</div>
              )}
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className={clsx(
                  "bg-black hover:bg-primary-clr text-2xl px-6 py-2 rounded-lg text-white",
                  mutation.isPending ? "opacity-50" : null
                )}
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddProductForm;
