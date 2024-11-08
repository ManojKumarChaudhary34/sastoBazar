import { useMutation } from "@tanstack/react-query";

export const DeleteProduct = () => {
  const deleteMutation = useMutation({
    mutationFn: (id) => DeleteProduct(id),
  });
  return <></>;
};
